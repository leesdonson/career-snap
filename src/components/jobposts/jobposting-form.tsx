"use client";

import React from "react";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { jobPostingSchema, JobType } from "@/lib/types/job-posting";
import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { DatePicker } from "./date-picker";

export const JobPostingForm = () => {
  const form = useForm<z.infer<typeof jobPostingSchema>>({
    defaultValues: {
      jobTitle: "",
      jobId: "",
      jobDescription: "",
      jobBenefits: "",
      jobLink: "",
      jobLocation: "",
      jobSalary: "",
      jobRequirements: "",
      jobType: JobType.FULL_TIME,
      jobClosingDate: new Date(),
    },
    resolver: zodResolver(jobPostingSchema),
  });

  const onSubmit = (data: z.infer<typeof jobPostingSchema>) => {
    console.log("clicked");
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-2xl mx-auto bg-white dark:bg-transparent mt-10 flex items-center border dark:border-slate-600 border-slate-400 rounded-lg p-4 justify-center flex-col"
      >
        <p className="text-lg font-bold p-2 mb-5">Job Posting Form</p>
        <div className="flex w-full items-center justify-center flex-col gap-5 mb-8">
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobTitle"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Title *</FormLabel>
                  <input
                    {...field}
                    className="w-full outline-none border border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    type="text"
                    placeholder="job title"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="jobId"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job ID *</FormLabel>
                  <input
                    {...field}
                    className="w-full border outline-none border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    type="text"
                    placeholder="job ID"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobDescription"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Description *</FormLabel>
                  <textarea
                    {...field}
                    className="w-full outline-none border border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    placeholder="job description"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobRequirements"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Requirements *</FormLabel>
                  <textarea
                    {...field}
                    className="w-full border outline-none border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    placeholder="reqmnt one, reqemnt two, reqemnt three,...."
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobBenefits"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Benefits</FormLabel>
                  <textarea
                    className="w-full border outline-none border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    placeholder="benefit one, benefit two, benefit three,...."
                    {...field}
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobLocation"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Location *</FormLabel>
                  <input
                    {...field}
                    className="w-full outline-none border border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    type="text"
                    placeholder="job location"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="jobLink"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Link</FormLabel>
                  <input
                    {...field}
                    className="w-full border outline-none border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    type="text"
                    placeholder="job link (optional)"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobType"
              control={form.control}
              render={({ field: { onChange, value } }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Type *</FormLabel>
                  <Select
                    onValueChange={(value) => onChange(value)}
                    defaultValue={value}
                  >
                    <SelectTrigger className="w-full border outline-none border-slate-500 rounded p-2 focus:border-blue-600">
                      <SelectValue placeholder="Select a job type" />
                    </SelectTrigger>
                    <SelectContent className="border-slate-500 rounded p-2 focus:border-blue-600">
                      {/* {/* <SelectItem value="FULL_TIME">Full Time</SelectItem> */}
                      <SelectItem value={JobType.FULL_TIME}>
                        Full Time
                      </SelectItem>
                      <SelectItem value={JobType.PART_TIME}>
                        Part Time
                      </SelectItem>
                      <SelectItem value={JobType.CONTRACT}>Contract</SelectItem>
                      <SelectItem value={JobType.INTERNSHIP}>
                        Internship
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="jobSalary"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Salary Range</FormLabel>
                  <input
                    {...field}
                    className="w-full border outline-none border-slate-500 rounded p-2 focus:border-blue-600"
                    autoComplete="off"
                    type="text"
                    placeholder="100 - 200 (optional)"
                  />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full items-center justify-center gap-3">
            <FormField
              name="jobClosingDate"
              control={form.control}
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Job Closing Date</FormLabel>
                  <DatePicker field={field} />
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>
        <Button className="w-full rounded" type="submit">
          Preview
        </Button>
      </form>
    </Form>
  );
};
