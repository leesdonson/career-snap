"use client";

import { useState } from "react";
import { JobpostingPreview } from "./jobposting-preview";
import { JobPostingForm } from "./jobposting-form";

export const JobPosting = () => {
  const [preview, setPreview] = useState(false);

  if (preview)
    return (
      <div className="w-full max-w-2xl mx-auto mt-10 p-5 min-h-screen flex items-center justify-center">
        <JobpostingPreview setPreview={() => setPreview(false)} />
      </div>
    );

  return <JobPostingForm setPreview={() => setPreview(true)} />;
};
