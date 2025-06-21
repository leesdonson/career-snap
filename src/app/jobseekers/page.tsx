import { JobListing } from "@/components/jobseekers/job-listing";
// import { SearchResultCard } from "@/components/jobseekers/search-result-card";
import { SearchBar } from "@/components/site/search-bar";
import React, { Suspense } from "react";
import { jobLists } from "@/lib/job-lists";
import Loading from "./loading";

const JobseekersPage = () => {
  return (
    <section className="min-h-screen p-5 relative w-full bg-white/50 dark:bg-black/50 flex flex-col items-center justify-center">
      {/* background */}
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Search Bar */}
      <div className="sticky w-full top-14 z-10 flex items-center backdrop-blur-2xl justify-center">
        <SearchBar />
      </div>
      {/* <div className="flex items-center justify-center flex-col p-5 gap-3">
        <SearchResultCard />
      </div> */}
      <Suspense fallback={<Loading />}>
        <div className="mt-10 grid grid-cols-1 gap-5 max-w-2xl w-full mx-auto">
          {jobLists.map((jobList) => (
            <JobListing key={jobList.jobId} jobList={jobList} />
          ))}
        </div>
      </Suspense>
    </section>
  );
};

export default JobseekersPage;
