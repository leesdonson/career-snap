"use client";

import { useEffect, useState } from "react";
import { JobpostingPreview } from "./jobposting-preview";
import { JobPostingForm } from "./jobposting-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const JobPosting = () => {
  const { data: session, status } = useSession();
  if (!session && status === "unauthenticated") {
    return redirect("/auth/sign-in");
  }
  const [preview, setPreview] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {!mounted && !preview ? (
        <div className="w-full max-w-2xl mx-auto mt-10 p-5 min-h-screen flex items-center justify-center">
          <JobPostingForm setPreview={() => setPreview(true)} />
        </div>
      ) : (
        <JobPostingForm setPreview={() => setPreview(true)} />
      )}
    </>
  );
};
