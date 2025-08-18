"use client";

import React, { useState } from "react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { CircleUser, Camera } from "lucide-react";
import UpdateInfo from "./update-info";
import { toast } from "sonner";

// import { z } from "zod";

// const fileSchema = z
//   .instanceof(File)
//   .refine((file) => file.type.startsWith("image/"), {
//     message: "Please select a file",
//   });

// const formSchema = z.object({
//   profileImage: z.string(fileSchema).optional(),
// });

export const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);

  const [uploading, setUploading] = useState(false);
  // const [uploadFailed, setUploadFailed] = useState(false);
  // const [uploadError, setUploadError] = useState(false);

  const [bio, setBio] = useState("");
  const [editingBio, setEditingBio] = useState(false);

  const [profileImage, setProfileImage] = useState<File[] | null>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [userImage, setUserImage] = useState<string | null>(null);

  const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME; // Replace with your Cloudinary cloud name

  const cloudinaryUrl = `https://api.cloudinary.com/v1_1/${cloudName}/upload`; // Replace with your Cloudinary URL

  console.log(name);
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
    formData.append("upload_preset", "career-snap"); // Replace with your upload preset
    const response = await fetch(cloudinaryUrl, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    return data; // Return the URL of the uploaded image
    // console.log(data);
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
        // setUploadError(true);
        // setUploadFailed(true);
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

  const { data: session, status } = useSession();
  if (status === "unauthenticated") return redirect("/auth/sign-in");

  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loading />
      </div>
    );
  // console.log(session);
  const updateName = (name: string) => {
    // Function to update the user's name
    console.log("Updating name to:");
    setName(name);
    setEditingName(false);
  };

  const updateBio = (bio: string) => {
    // Function to update the user's name
    console.log("Updating bio to:");
    setBio(bio);
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
              defaultValue={"unknown"}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => updateName(name)}
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
            onClick={() => updateName(name)}
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
              onBlur={() => updateBio(bio)}
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
            onClick={() => updateBio(bio)}
          >
            Save
          </button>
        )}
      </div>
      <UpdateInfo />
    </div>
  );
};
