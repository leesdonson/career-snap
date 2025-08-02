"use client";

import React from "react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const PersonalInfo = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") return redirect("/auth/sign-in");

  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loading />
      </div>
    );

  return (
    <div className="w-full flex items-center border border-amber-300 p-2 justify-center">
      <h1 className="text-2xl font-bold">Personal Info</h1>
    </div>
  );
};
