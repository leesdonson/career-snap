import React from "react";

import { jobLists } from "@/lib/job-lists";
import { JobsCard } from "./card";
import Link from "next/link";

export const JobListing = () => {
  return (
    <div className="">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
        {jobLists?.map((job) => (
          <Link
            href={`/jobseekers/${job.jobId}`}
            key={job.jobId}
            className="border border-slate-600 p-2 bg-slate-50/50 dark:bg-black/50 rounded-md"
          >
            <JobsCard jobList={job} />
          </Link>
        ))}
      </div>
    </div>
  );
};
