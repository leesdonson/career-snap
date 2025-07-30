"use client";

import React from "react";
import { jobLists } from "@/lib/job-lists";
import { useFilterContext } from "@/contexts/filters/filter-context";
import { JobList } from "@/lib/types/job-posting";
import { X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
export const SearchResults = ({ url }: { url: string }) => {
  const { searchTerm, setSearchTerm } = useFilterContext();
  const router = useRouter();

  // apply search filters and return results that include search term
  const result: JobList[] = jobLists
    .filter(
      (job) =>
        job.jobTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.jobLocation.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(0, 6);
  const handleBack = () => {
    setSearchTerm("");
    router.push(url);
  };
  return (
    <div className="border overflow-auto scroll-smooth h-[400px] relative rounded-md border-amber-400 max-w-2xl mx-auto w-full">
      <div className="border-b border-slate-400 p-2 mb-2 bg-black/80 rounded-t-md">
        <button onClick={handleBack} className="absolute top-2 right-2">
          <X />
        </button>
        <div className="">
          <h1 className="text-2xl font-bold">Search Results</h1>
          <p className="text-sm">
            Top {result.length} results found from your search history.
          </p>
        </div>
      </div>

      <div className="p-2">
        {result.length === 0 && (
          <div className="flex items-center justify-center h-full w-full">
            <p className="text-2xl font-bold">No results found</p>
          </div>
        )}
        {result.length > 0 &&
          result.map((job) => (
            <div
              className="border hover:bg-slate-900 transition-all duration-300 ease-in-out border-slate-500 p-2 mb-2 rounded"
              key={job.jobId}
            >
              <Link href={`/jobseekers/${job.jobId}`}>
                <h1 className="text-lg">{job.jobTitle}</h1>
                <p className="text-sm">{job.companyName}</p>
                <div className="flex items-center justify-between text-sm">
                  <p>{job.jobLocation}</p>
                  <p>{job.jobType}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};
