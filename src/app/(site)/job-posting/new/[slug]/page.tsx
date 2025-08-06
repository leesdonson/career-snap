import React from "react";
import { JobPostingForm } from "@/components/jobposts/jobposting-form";
import { getCompany } from "@/actions/biz-queries";

const NewJobPostingPage = async ({ slug }: { slug: string }) => {
  const company = await getCompany(slug); // Replace with actual company ID if needed
  console.log(company);
  return (
    <section className="w-full bg-neutral-100 dark:bg-transparent p-2  mt-4 flex items-center justify-center flex-col">
      <JobPostingForm slug={company?.slug} />
    </section>
  );
};

export default NewJobPostingPage;
