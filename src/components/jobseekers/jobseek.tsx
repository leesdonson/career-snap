"use client";

import React from "react";
import { SearchBar } from "../site/search-bar";
import { SearchResults } from "../site/search-results";
import { useFilterContext } from "@/contexts/filters/filter-context";

const JobSeek = () => {
  const { searchTerm } = useFilterContext();
  return (
    <div className="w-full bg-white/60 dark:bg-black/50  relative flex items-center justify-center">
      <SearchBar />
      {searchTerm && (
        <div className="absolute overflow-hidden backdrop-blur-xs h-screen z-20 top-0 left-0 right-0 bg-black/80 flex items-center justify-center">
          <SearchResults url="/jobseekers" />
        </div>
      )}
    </div>
  );
};

export default JobSeek;
