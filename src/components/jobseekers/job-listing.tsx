import React from "react";
import {
  BookOpenCheck,
  FileCheck2,
  HandHeart,
  CircleDollarSign,
} from "lucide-react";
import { JobList } from "@/lib/types/job-posting";

export const JobListing = ({ jobList }: { jobList: JobList }) => {
  return (
    <div className="flex flex-col border border-slate-600 rounded-md p-5">
      {/* header */}
      <header className="flex items-center justify-center gap-5">
        <h2 className="h-10 w-10 text-lg font-bold flex items-center justify-center border border-slate-600 rounded-full p-2">
          {jobList.companyName.split(" ")[0].charAt(0).toUpperCase() +
            jobList.companyName.split(" ")[1].charAt(0).toUpperCase()}
        </h2>
        <p>{jobList.companyName}</p>
      </header>
      <div className="border-1 w-full my-3 border-slate-600" />
      {/* content */}
      <main className="flex flex-col gap-5">
        <div className="flex items-center flex-col justify-center">
          <div className="flex items-center justify-center p-3 gap-5">
            <h3>Job Title: {jobList.jobTitle}</h3> |{" "}
            <p>Location: {jobList.jobLocation}</p>
          </div>
          <small>Job ID: {jobList.jobId}</small>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold flex items-center">
            <BookOpenCheck className="mr-3 h-5 w-5 flex items-center" />
            Job Description:
          </p>
          <p className="">{jobList.jobDescription}</p>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold flex items-center">
            <FileCheck2 className="mr-3 h-5 w-5" />
            Job Requirements
          </p>
          <ul className="list-disc ml-5">
            {jobList.jobRequirements.split(",").map((requirement, index) => (
              <li className="capitalize" key={index}>
                {requirement}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold flex items-center">
            <HandHeart className="mr-2 h-5 w-5" />
            Job Benefits
          </p>
          <ul className="list-disc ml-5">
            {jobList.jobBenefits.split(",").map((benefit, index) => (
              <li className="capitalize" key={index}>
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-semibold flex items-center">
            <CircleDollarSign className="mr-2 h-5 w-5" /> Salary
          </p>
          <p>{jobList.jobSalary}</p>
        </div>
        <div className="flex items-center justify-between">
          <p>
            Job Type: <span>{jobList.jobType}</span>
          </p>
          <p>
            Job Status: <span>{jobList.jobStatus}</span>
          </p>
        </div>

        <footer className="text-sm flex italic items-center justify-between">
          <p>Posted on : {jobList.jobPostingDate}</p>
          <p>Application Closing on : {jobList.jobClossingDate}</p>
        </footer>
      </main>
    </div>
  );
};
