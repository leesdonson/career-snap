import { JobPosting } from "@/components/jobposts/jobposting";

const JobPostingPage = () => {
  return (
    <div className="w-full bg-neutral-100 dark:bg-transparent p-2  mt-4 flex items-center justify-center flex-col">
      <JobPosting />
    </div>
  );
};

export default JobPostingPage;
