import React from "react";
import { Button } from "../ui/button";
import { SearchBar } from "./search-bar";
import Link from "next/link";

export const HeroSection = () => {
  return (
    <section className="min-h-screen p-2 mt-5  relative w-full bg-white/50 dark:bg-black/50 flex flex-col items-center justify-center">
      {/* background */}
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Search Bar */}
      <SearchBar />

      <div className="flex items-center justify-center flex-col p-5 gap-3">
        <h1 className="text-5xl font-bold p-2">CareerSnap</h1>
        <p className="mb-3">The smarter way to find jobs.</p>
      </div>
      <div className="flex items-center justify-center flex-col px-5 gap-5">
        <p>
          <span className="text-medium font-bold">CareerSnap!</span> is a job
          search tool that helps you find the right job for you.
        </p>
        <Link href="/auth/sign-in" className="px-10 rounded py-5 w-full">
          <Button className="px-10 bg-gradient-to-r text-white from-purple-800  to-blue-600 rounded py-5 w-full">
            Get Started
          </Button>
        </Link>
        <div className="flex items-center font-black md:text-lg gap-5">
          <div className="border border-slate-500 p-2 rounded-md">
            <p>2000+</p>
            <p>Jobs/day</p>
          </div>
          <div className="border border-slate-500 p-2 rounded-md">
            <p>1000+</p>
            <p>Companies</p>
          </div>
          <div className="border border-slate-500 p-2 rounded-md">
            <p>1000+</p>
            <p>Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};
