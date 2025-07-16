"use client";

import { useEffect, useState } from "react";
import { JobpostingPreview } from "./jobposting-preview";
import { JobPostingForm } from "./jobposting-form";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export const JobPosting = () => {
  const { data: session, status } = useSession();
  const [mounted, setMounted] = useState(false);
  const [preview, setPreview] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (!session && status === "unauthenticated") {
      redirect("/auth/sign-in");
    }
  }, [session, status]);

  if (!mounted) return null;

  return (
    <>
      {!preview ? (
        <div className="w-full max-w-2xl mx-auto mt-10 p-5 min-h-screen flex items-center justify-center">
          <JobpostingPreview setPreview={() => setPreview(true)} />
        </div>
      ) : (
        <JobPostingForm setPreview={() => setPreview(true)} />
      )}
    </>
  );
};
