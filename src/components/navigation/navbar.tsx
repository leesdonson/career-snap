import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
import { MobileMenu } from "./mobile-menu";
import { UserStatus } from "../auth/users/user-status";

export const navLinks = [
  {
    name: "Find Jobs",
    path: "/jobseekers",
  },
  {
    name: "Employers/ Post Job",
    path: "/job-posting",
  },
];

export const Navbar = () => {
  return (
    <header className="flex fixed top-0 bg-white/70 backdrop-blur-2xl dark:bg-neutral-950/70 left-0 right-0 z-20 w-full items-center justify-between py-2 px-3 md:px-10">
      <div className="">
        <Link
          href={"/"}
          className="text-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent font-bold"
        >
          careerSnap
        </Link>
      </div>
      <div className="flex items-center justify-center gap-3">
        <nav className="md:flex items-center justify-center hidden  gap-5">
          {navLinks.map((link) => (
            <Link
              className="shadow-sm p-2 text-sm hover:scale-105 transition-all duration-300 ease-in-out rounded border border-slate-600 shadow-blue-600 "
              key={link.name}
              href={link.path}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        {/* Usesr status*/}
        <UserStatus />

        <div className="md:hidden block">
          <MobileMenu />
        </div>
        <ThemeToggle />
      </div>
    </header>
  );
};
