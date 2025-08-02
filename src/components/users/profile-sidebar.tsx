"use client";

import React from "react";
import { User } from "lucide-react";
import { Loading } from "@/components/ui/loading";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";

export const Profile = () => {
  const { data: session, status } = useSession();
  if (status === "unauthenticated") return redirect("/auth/sign-in");
  if (status === "loading")
    return (
      <div className="flex items-center justify-center h-screen w-full">
        <Loading />
      </div>
    );

  return (
    <div className="w-full">
      <div className="p-2 w-full border flex flex-col md:flex-row items-center gap-3">
        {/* user profile */}

        <div className="relative flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 ring-2 ring-blue-500 rounded-full">
          {session?.user?.image ? (
            <Image
              src={session?.user?.image}
              alt={session?.user?.name as string}
              fill
              sizes="100%"
              className="rounded-full object-center object-cover"
            />
          ) : (
            <div className="">
              <User className="h-7 w-7" />
            </div>
          )}
        </div>
        <p className="font-bold text-sm  md:text-lg text-blue-700">
          {session?.user?.name ? session?.user.name : session?.user.email}
        </p>
      </div>
      {/* user details */}
      <div className="mt-5 flex gap-3 flex-col">
        <div className="">
          {/* details */}
          <p>Personal Info</p>
        </div>
        {/* Past Experiences */}
        <div className="">
          <p>Past Experiences</p>
        </div>
        {/* Education */}
        <div className="">
          <p>Education</p>
        </div>
        {/* Skills */}
        <div className="">
          <p>Skills</p>
        </div>
        {/* Languages */}
        <div className="">
          <p>Languages</p>
        </div>
      </div>
    </div>
  );
};
