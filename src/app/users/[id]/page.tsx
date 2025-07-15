import { UserDetails } from "@/components/users/user-details";
import { Profile } from "@/components/users/profile-sidebar";
import React from "react";

const UserProfile = () => {
  return (
    <div className="h-screen overflow-hidden flex p-2">
      <aside className="w-1/4 hidden sm:block overflow-y-auto bg-slate-950 p-2 mt-[3rem]">
        <Profile />
      </aside>
      <main className="w-3/4 p-2 mt-[3rem]">
        <UserDetails />
      </main>
    </div>
  );
};

export default UserProfile;
