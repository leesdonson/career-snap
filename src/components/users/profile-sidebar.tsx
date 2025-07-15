"use client";

import React from "react";
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
              src={session?.user?.image!}
              alt={session?.user.name!}
              fill
              sizes="100%"
              className="rounded-full object-center object-cover"
            />
          ) : (
            <p>
              {session?.user?.name?.split(" ")[0].charAt(0).toUpperCase() +
                session?.user?.name?.split(" ")[1].charAt(0).toUpperCase()!}
            </p>
          )}
        </div>
        <p className="font-bold text-sm  md:text-lg text-blue-700">
          {session?.user?.name}
        </p>
      </div>
    </div>
  );
};
