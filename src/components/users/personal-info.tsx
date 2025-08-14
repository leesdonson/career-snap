"use client";

import React, { useState } from "react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const PersonalInfo = () => {
  const [name, setName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [bio, setBio] = useState("");
  const [editingName, setEditingName] = useState(false);
  const [editingDob, setEditingDob] = useState(false);
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
  const updateDateOfBirth = (dateOfBirth: string) => {
    // Function to update the user's name
    console.log("Updating dob to:");
    setDateOfBirth(dateOfBirth);
    setEditingDob(false);
  };
  const updateBio = (bio: string) => {
    // Function to update the user's name
    console.log("Updating bio to:");
    setBio(bio);
    setEditingBio(false);
  };
  return (
    <div className="w-full text-sm text-slate-100 border flex flex-col space-y-3 items-center p-2 justify-center">
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
        <div className="p-1 flex flex-col space-y-2">
          <label htmlFor="date-of-birth">Date of Birth:</label>
          {editingDob ? (
            <input
              value={dateOfBirth}
              defaultValue={"unknown"}
              onChange={(e) => setDateOfBirth(e.target.value)}
              onBlur={() => updateDateOfBirth(dateOfBirth)}
              className="outline-none border rounded px-1 focus:border-blue-600"
              type="text"
              autoFocus
            />
          ) : (
            <span onClick={() => setEditingDob(true)}>
              {dateOfBirth || "03 January 2000"}
            </span>
          )}
        </div>
        {editingDob && (
          <button
            className="text-sm bg-green-500 p-1 rounded w-20"
            onClick={() => updateDateOfBirth(dateOfBirth)}
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
              defaultValue={"bio"}
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
    </div>
  );
};
