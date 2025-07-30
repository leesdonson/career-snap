import { JobListing } from "@/components/jobseekers/job-listing";
import React, { Suspense } from "react";
import Loading from "./loading";
import JobSeek from "@/components/jobseekers/jobseek";

const JobseekersPage = () => {
  return (
    <section className="min-h-screen p-3 md:p-5 relative w-full bg-white/50 dark:bg-black/50 flex flex-col items-center justify-center">
      {/* background */}
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Search Bar */}
      <div className="sticky w-full top-14 z-10 flex items-center  justify-center">
        {/* <SearchBar /> */}
        <JobSeek />
      </div>

      <Suspense fallback={<Loading />}>
        <div className="mt-14 md:mt-12 w-full">
          <JobListing />
        </div>
      </Suspense>
    </section>
  );
};

export default JobseekersPage;
