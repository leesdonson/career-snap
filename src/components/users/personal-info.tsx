"use client";

import React, { useState } from "react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { CircleUser, Camera } from "lucide-react";
import UpdateInfo from "./update-info";

export const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [editingName, setEditingName] = useState(false);

  const [bio, setBio] = useState("");
  const [editingBio, setEditingBio] = useState(false);

  console.log(name);

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
      <div className="relative w-full flex items-center justify-center">
        <div className="relative h-5">
          <label
            htmlFor="avatar"
            title="Change Avatar"
            className="cursor-pointer absolute -bottom-6 -right-2"
          >
            <input type="file" id="avatar" hidden />
            <Camera className="h-5 w-5 text-slate-500 hover:text-slate-300" />
          </label>
        </div>
        {session?.user?.image ? (
          <img
            src={session?.user?.image || "/default-avatar.png"}
            alt="User Avatar"
            className="h-20 w-20 rounded-full object-cover"
          />
        ) : (
          <CircleUser className="h-20 w-20" />
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
