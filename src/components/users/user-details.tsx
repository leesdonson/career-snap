"use client";

import React from "react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const UserDetails = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") return redirect("/auth/sign-in");

  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loading />
      </div>
    );

  return (
    <div>
      <div className="flex items-center gap-5 text-sm p-2">
        <p>Email : {session?.user?.email}</p>
        <p className="">ID : {session?.user?.id.slice(0, 8).concat("...")}</p>
      </div>
    </div>
  );
};
