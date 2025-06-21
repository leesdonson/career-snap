import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./theme-toggle";
const navLinks = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

export const Navbar = () => {
  return (
    <header className="flex w-full items-center justify-between py-2 px-10">
      <div className="">
        <p className="text-xl font-bold">careerSnap!</p>
      </div>
      <div className="flex items-center justify-center gap-5">
        <nav className="flex items-center justify-center gap-5">
          {navLinks.map((link) => (
            <Link
              className="hover:underline underline-offset-2 hover:text-blue-600"
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
