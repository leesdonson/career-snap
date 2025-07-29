"use client";

import React from "react";
import { jobLists } from "@/lib/job-lists";
import { useParams, useRouter } from "next/navigation";
import {
  BookOpenCheck,
  FileCheck2,
  HandHeart,
  CircleDollarSign,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import clsx from "clsx";

export const JobDetails = () => {
  const { id } = useParams();
  const router = useRouter();

  const jobList = jobLists.find((job) => job.jobId === id);

  if (!jobList)
    return (
      <div className="flex items-center justify-center h-screen w-full max-w-xl mx-auto p-10">
        Job not found
      </div>
    );
  return (
    <div className="flex relative bg-white/50 dark:bg-black/50 flex-col border border-slate-600 rounded-md p-5">
      <div
        onClick={() => router.back()}
        className="absolute right-2 top-2 bg-red-600 p-1 rounded-full"
      >
        <X />
      </div>
      {/* header */}
      <header className="flex items-center justify-center gap-5">
        <h2 className="h-10 w-10 text-lg font-bold flex items-center justify-center border border-slate-600 rounded-full p-2">
          {jobList?.companyName.split(" ")[0].charAt(0).toUpperCase() +
            jobList?.companyName?.split(" ")[1].charAt(0).toUpperCase()}
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
            Job Status:{" "}
            <span
              className={clsx("p-1 rounded text-sm text-slate-50", {
                "bg-green-500": jobList.jobStatus === "OPEN",
                "bg-red-500": jobList.jobStatus === "CLOSED",
              })}
            >
              {jobList.jobStatus}
            </span>
          </p>
        </div>
        <div className="py-2">
          {jobList.jobLink && jobList.hrEmail ? (
            <div className="flex items-center justify-between gap-5">
              <a
                className="text-sn"
                href={jobList.jobLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="rounded">Apply Now</Button>
              </a>
              <div className="text-sm">
                or send your resume with a cover letter and supporting documents
                to <span className="font-bold">{jobList.hrEmail}</span>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-between gap-5">
              {jobList.hrEmail ? (
                <div className="text-sm">
                  Send your resume with a cover letter and supporting documents
                  to <span className="font-bold">{jobList.hrEmail}</span>
                </div>
              ) : (
                <a
                  className="text-sn"
                  href={jobList.jobLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="rounded">Apply Now</Button>
                </a>
              )}
            </div>
          )}
        </div>
        <footer className="text-sm flex italic items-center justify-between">
          <p>Posted on : {new Date(jobList.jobPostingDate)?.toDateString()}</p>
          <p>
            Application Closing on :{" "}
            {new Date(jobList.jobClosingDate)?.toDateString()}
          </p>
        </footer>
      </main>
    </div>
  );
};
