import { z } from "zod";

export enum JobStatus {
  OPEN = "OPEN",
  CLOSED = "CLOSED",
}

export enum JobType {
  FULL_TIME = "FULL_TIME",
  PART_TIME = "PART_TIME",
  INTERNSHIP = "INTERNSHIP",
  CONTRACT = "CONTRACT",
}

export type JobList = {
  jobId: string;
  companyLogo: string;
  companyName: string;
  jobTitle: string;
  jobLocation: string;
  jobLink: string;
  jobDescription: string;
  jobRequirements: string;
  jobBenefits: string;
  jobSalary: string;
  jobType: JobType;
  jobStatus: JobStatus;
  jobPostingDate: Date;
  jobClosingDate: Date;
};

export const jobPostingSchema = z.object({
  jobId: z
    .string()
    .min(6, { message: "Please enter unique ID for the job post." }),
  jobTitle: z.string().min(3, { message: "Please enter job title." }),
  jobLocation: z
    .string()
    .min(3, { message: "Please add location for the job." }),
  jobLink: z.string().optional(),
  jobDescription: z
    .string()
    .min(3, { message: "Please add description for the job." }),
  jobRequirements: z
    .string()
    .min(3, { message: "Please add the job requirements." }),
  jobBenefits: z.string().optional(),
  jobSalary: z.string().optional(),
  jobType: z.enum(
    [
      JobType.FULL_TIME,
      JobType.PART_TIME,
      JobType.INTERNSHIP,
      JobType.CONTRACT,
    ],
    { message: "Please select a job type." }
  ),
  jobClosingDate: z.date(),
});
