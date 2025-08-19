"use client";

import React, { useEffect, useState } from "react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { CircleUser, Camera } from "lucide-react";
import UpdateInfo from "./update-info";
import { toast } from "sonner";
import { updateUserBio, updateUserName } from "@/actions/update-profile";
import { getUserDetails } from "@/actions/user-query";
import { useUserProfile } from "@/contexts/users/user-context";

export const PersonalInfo = () => {
  const { data: session, status } = useSession();
  const { setUser } = useUserProfile();

  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);

  const [uploading, setUploading] = useState(false);

  const [bio, setBio] = useState("");
  const [editingBio, setEditingBio] = useState(false);

  const [profileImage, setProfileImage] = useState<File[] | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);
  useEffect(() => {
    const fetchUserDetails = async () => {
      if (session?.user?.id) {
        const user = await getUserDetails(session.user.id);
        if (user) {
          setUser(user);
          setBio(user.bio || "");
          setName(user.name || "");
        } else {
          console.error("No user session found");
        }
      }
    };
    fetchUserDetails();
  }, [session?.user]);

  if (status === "unauthenticated") return redirect("/auth/sign-in");

  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loading />
      </div>
    );

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: string) => void
  ) => {
    const files = e.target.files;
    const selectedFile = files ? files[0] : null;
    const image = selectedFile ? URL.createObjectURL(selectedFile) : "";

    setPreviewImage(image);
    if (files) {
      setProfileImage((prev) => [...(prev || []), ...files]);
    }
    onChange(selectedFile?.toString() as string);
  };
  const uploadImage = async (images: File[]) => {
    const formData = new FormData();

    formData.append("file", images[0]);
    formData.append("upload_preset", "career-snap");
    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data;
  };

  const onUpload = async () => {
    try {
      if (!profileImage) {
        toast.error("Please select an image to upload.", {
          style: {
            backgroundColor: "#c9080f",
            color: "#ffffff",
          },
        });
        return;
      }
      setUploading(true);
      const response = await uploadImage(profileImage);
      if (!response) {
        setUploading(false);
        toast.error("No response from Cloudinary.", {
          style: {
            backgroundColor: "#c9080f",
            color: "#ffffff",
          },
        });
        throw new Error("No response from Cloudinary");
      }
      console.log(response);
      setUserImage(response.secure_url);
      setUploading(false);
      setPreviewImage(null);
      setProfileImage(null);
      toast.success("Image uploaded successfully.", {
        style: {
          backgroundColor: "#17c40e",
          color: "#ffffff",
        },
      });
    } catch (error) {
      setUploading(false);
      console.error("Error uploading image:", error);
      toast.error("Failed to upload image.", {
        style: {
          backgroundColor: "#c9080f",
          color: "#ffffff",
        },
      });
    }
  };

  const updateName = async () => {
    // Function to update the user's name
    const response = await updateUserName(name);
    if (response.success) {
      toast.success("Name updated successfully!", {
        style: {
          backgroundColor: "#14db49",
          color: "#ffffff",
        },
      });
    } else {
      toast.error("Failed to update name.", {
        style: {
          backgroundColor: "#db1e14",
          color: "#ffffff",
        },
      });
    }

    setEditingName(false);
  };

  const updateBio = async () => {
    // Function to update the user's name
    const response = await updateUserBio(bio);
    if (response.success) {
      toast.success("Bio updated successfully!", {
        style: {
          backgroundColor: "#14db49",
          color: "#ffffff",
        },
      });
    } else {
      toast.error("Failed to update bio.", {
        style: {
          backgroundColor: "#db1e14",
          color: "#ffffff",
        },
      });
    }
    setEditingBio(false);
  };

  return (
    <div className="w-full rounded-md text-sm text-slate-100 border flex flex-col space-y-3 p-2">
      <div className="relative w-full flex space-x-3 items-center justify-center">
        <div className="relative">
          {previewImage && (
            <button
              className="text-sm  bg-green-500 p-1 rounded"
              onClick={onUpload}
            >
              {uploading ? (
                <div className="w-full flex items-center justify-center space-x-2">
                  <Loading />
                  <span className="text-sm">Uploading...</span>
                </div>
              ) : (
                "Upload"
              )}
            </button>
          )}
          <label
            htmlFor="avatar"
            title="Change Avatar"
            className="cursor-pointer "
          >
            <input
              onChange={(e) => handleImageChange(e, () => uploadImage)}
              accept="image/*"
              type="file"
              id="avatar"
              hidden
            />
            <Camera className="h-5 absolute -bottom-10 -right-26 w-5 text-slate-500 hover:text-slate-300" />
          </label>
        </div>

        {userImage ? (
          <img
            src={userImage || "/default-avatar.png"}
            alt="User Avatar"
            className="h-20 w-20 rounded-full object-cover"
          />
        ) : (
          <div className="">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover"
              />
            ) : (
              <CircleUser className="h-20 w-20" />
            )}
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="p-1 flex flex-col space-y-2">
          <label htmlFor="name">Name:</label>
          {editingName ? (
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-none border rounded px-1 focus:border-blue-600"
              type="text"
              autoFocus
            />
          ) : (
            <span onClick={() => setEditingName(true)}>
              {name || "Unknown"}
            </span>
          )}
        </div>
        {editingName && (
          <button
            className="text-sm bg-green-500 p-1 rounded w-20"
            onClick={updateName}
          >
            Save
          </button>
        )}
      </div>
      <div className="w-full flex items-center justify-between">
        <div className="p-1 space-y-2 flex flex-col">
          <label htmlFor="bio">Bio:</label>
          {editingBio ? (
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="outline-none w-lg block resize-none border rounded px-1 focus:border-blue-600"
              autoFocus
            />
          ) : (
            <span onClick={() => setEditingBio(true)}>
              {bio || "Tell us about yourself..."}
            </span>
          )}
        </div>
        {editingBio && (
          <button
            className="text-sm bg-green-500 p-1 rounded w-20"
            onClick={updateBio}
          >
            Save
          </button>
        )}
      </div>
      <UpdateInfo />
    </div>
  );
};
