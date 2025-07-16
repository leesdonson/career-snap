import React from "react";
import { SearchBar } from "./search-bar";

export const HeroSection = () => {
  return (
    <section className="min-h-screen p-2 mt-8  relative w-full bg-white/50 dark:bg-black/50 flex flex-col items-center justify-center">
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Search Bar */}
      <SearchBar />

      <div className="flex items-center justify-center flex-col p-5">
        <h1 className="text-5xl font-bold p-2">CareerSnap</h1>
        <p className="mb-3 text-sm">The smarter way to find jobs.</p>
      </div>
      <div className="flex items-center justify-center flex-col px-5 gap-5">
        <p>
          <span className="text-medium font-bold">CareerSnap!</span> is a job
          search tool that helps you find the right job for you.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-full max-w-xl mx-auto font-semibold mt-5">
          <div className="hero-overview">
            <p>100+</p>
            <p>Jobs/day</p>
          </div>
          <div className="hero-overview">
            <p>500+</p>
            <p>Companies</p>
          </div>
          <div className="hero-overview">
            <p>1000+</p>
            <p>Users</p>
          </div>
        </div>
      </div>
    </section>
  );
};
