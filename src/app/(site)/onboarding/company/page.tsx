import React from "react";
import { CompanyOnboardingForm } from "@/components/onboarding/company-onboarding";

const CompanyOnboardingPage = () => {
  return (
    <div className="flex items-center mt-12 p-2 justify-center w-full min-h-screen max-w-3xl mx-auto">
      <CompanyOnboardingForm />
    </div>
  );
};

export default CompanyOnboardingPage;
