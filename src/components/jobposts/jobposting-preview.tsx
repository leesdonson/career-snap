"use client";
import {
  BookOpenCheck,
  FileCheck2,
  HandHeart,
  CircleDollarSign,
} from "lucide-react";
import { JobList, JobStatus } from "@/lib/types/job-posting";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const JobpostingPreview = ({
  setPreview,
}: {
  setPreview: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const jobposting: JobList = localStorage.getItem("jobPosting")
    ? JSON.parse(localStorage.getItem("jobPosting")!)
    : {};

  const router = useRouter();
  //   console.log(jobposting);

  const publish = () => {
    localStorage.removeItem("jobPosting");
    setPreview(false);
    toast.success("Job posted successfully", {
      style: { backgroundColor: "green", color: "white" },
    });
    router.push("/");
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex w-full flex-col border border-slate-600 rounded-md p-5">
        {/* header */}
        <header className="flex items-center justify-center gap-5">
          <h2 className="h-10 w-10 text-lg font-bold flex items-center justify-center border border-slate-600 rounded-full p-2">
            {jobposting.companyName.split(" ")[0].charAt(0).toUpperCase() +
              jobposting.companyName.split(" ")[1].charAt(0).toUpperCase()}
          </h2>
          <p>{jobposting.companyName}</p>
        </header>
        <div className="border-1 w-full my-3 border-slate-600" />
        {/* content */}
        <main className="flex flex-col gap-5">
          <div className="flex items-center flex-col justify-center">
            <div className="flex items-center justify-center p-3 gap-5">
              <h3>Job Title: {jobposting.jobTitle}</h3> |{" "}
              <p>Location: {jobposting.jobLocation}</p>
            </div>
            <small>Job ID: {jobposting.jobId}</small>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold flex items-center">
              <BookOpenCheck className="mr-3 h-5 w-5 flex items-center" />
              Job Description:
            </p>
            <p className="">{jobposting.jobDescription}</p>
          </div>

          <div className="flex flex-col gap-3">
            <p className="font-semibold flex items-center">
              <FileCheck2 className="mr-3 h-5 w-5" />
              Job Requirements
            </p>
            <ul className="list-disc ml-5">
              {jobposting.jobRequirements
                .split(",")
                .map((requirement, index) => (
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
              {jobposting?.jobBenefits?.split(",").map((benefit, index) => (
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
            <p>${jobposting.jobSalary}</p>
          </div>
          <div className="flex items-center justify-between">
            <p>
              Job Type: <span>{jobposting.jobType}</span>
            </p>
            <p>
              Job Status:{" "}
              <span
                className={cn("", {
                  "text-green-600": jobposting.jobStatus === JobStatus.OPEN,
                  "text-red-600": jobposting.jobStatus === JobStatus.CLOSED,
                })}
              >
                {JobStatus.OPEN}
              </span>
            </p>
          </div>

          <footer className="text-sm mb-5 flex italic items-center justify-between">
            <p>Posted on : {new Date().toDateString()}</p>
            <p>
              Application Closing on :{" "}
              {new Date(jobposting.jobClosingDate)?.toDateString()}
            </p>
          </footer>
          <div className="flex w-full  items-center justify-center gap-5">
            <Button
              onClick={() => setPreview(false)}
              type="button"
              className="w-1/4 rounded"
            >
              Edit
            </Button>
            <Button onClick={publish} type="button" className="w-1/4 rounded">
              Publish
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
};
