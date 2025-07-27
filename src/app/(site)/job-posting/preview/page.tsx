"use client";

import React from "react";
import { useEffect, useState } from "react";
import { JobpostingPreview } from "@/components/jobposts/jobposting-preview";

const JobPostingPreviewPage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div>
      <JobpostingPreview />
    </div>
  );
};

export default JobPostingPreviewPage;
