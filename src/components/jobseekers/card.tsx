import React from "react";
import { JobList } from "@/lib/types/job-posting";
import Image from "next/image";
import {
  GraduationCap,
  MapPin,
  CircleDollarSign,
  Hourglass,
  BookOpenText,
} from "lucide-react";

export const JobsCard = ({ jobList }: { jobList: JobList }) => {
  return (
    <div className="p-2">
      {/* header */}
      <div className="flex items-center gap-3 mb-3">
        <div className="relative h-10 w-10 rounded-full">
          <Image
            src={jobList.companyLogo}
            alt={jobList.companyName}
            fill
            sizes="100%"
            className="rounded-full object-center object-cover"
          />
        </div>
        <h1 className="font-bold text-sm md:text-lg ">{jobList.companyName}</h1>
      </div>
      {/* details */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <p className="font-semibold flex items-center gap-2">
          <span>
            <GraduationCap className="h-6 w-6" />
          </span>
          {jobList.jobTitle}
        </p>{" "}
        |{" "}
        <p className="font-semibold flex items-center gap-2">
          <span>
            <MapPin className="h-5 w-5" />
          </span>
          {jobList.jobLocation}
        </p>
      </div>

      {/* footer */}
      <div className="flex items-center justify-between mb-4 text-sm">
        <p className="font-semibold flex items-center gap-2">
          <span>
            <Hourglass className="h-5 w-5" />
          </span>
          {jobList.jobType}
        </p>{" "}
        |{" "}
        <p className="font-semibold flex items-center gap-2">
          {" "}
          <span>
            <CircleDollarSign className="h-5 w-5" />
          </span>{" "}
          {jobList.jobSalary}
        </p>
      </div>
      <div className="text-sm font-light mb-4">
        <p className="font-semibold flex items-center gap-2">
          <span>
            <BookOpenText className="h-5 w-5" />
          </span>
          Job Description:
        </p>
        <p>{jobList.jobDescription.slice(0, 50).concat("...")}</p>
      </div>
      <small className="text-xs italic">
        Posted on: {jobList.jobPostingDate.toDateString()}
      </small>
    </div>
  );
};
