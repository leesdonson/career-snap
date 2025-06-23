import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
const navLinks = [
  {
    name: "JobSeekers",
    path: "/jobseekers",
  },
  {
    name: "Employers/ Post Job",
    path: "/job-posting",
  },
];

export const Navbar = () => {
  return (
    <header className="flex fixed top-0 bg-white/70 backdrop-blur-2xl dark:bg-neutral-950/70 left-0 right-0 z-20 w-full items-center justify-between py-2 px-10">
      <div className="">
        <Link href={"/"} className="text-xl font-bold">
          careerSnap!
        </Link>
      </div>
      <div className="flex items-center justify-center gap-5">
        <nav className="flex items-center justify-center gap-5">
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
        <ThemeToggle />
      </div>
    </header>
  );
};
