import SignInForm from "@/components/auth/sign-in";
import React from "react";

const SignInPage = () => {
  return (
    <section className="w-full flex items-center justify-center min-h-screen overflow-hidden p-2">
      <SignInForm />
    </section>
  );
};

export default SignInPage;
