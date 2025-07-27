"use client";

import { useEffect } from "react";
import { JobPostingForm } from "./jobposting-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const JobPosting = () => {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (!session && status === "unauthenticated") {
      redirect("/auth/sign-in");
    }
  }, [session, status]);

  return <JobPostingForm />;
};
