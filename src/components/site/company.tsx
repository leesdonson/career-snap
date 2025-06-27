"use client";

import { useRouter } from "next/navigation";

export const Company = () => {
  const router = useRouter();
  return (
    <section className="min-h-screen bg-white/50 dark:bg-black/50 relative w-full flex items-center overflow-hidden justify-center">
      {/* Background */}
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />

      {/* Content */}
      <div className="max-w-xl mx-auto w-full p-3">
        <h2 className=" text-3xl text-center md:text-left md:text-4xl font-bold mb-5">
          Sign Up to get
          <br />
          <span className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
            Personalized Recommendations
          </span>
        </h2>
        <p className="mb-3">
          Sign up to get a personalized list of jobs that match your skills and
          interests, making it easier to find the job that you want.
        </p>
        <p className="mb-5">
          You will also be notified when a job you are interested in is posted
          so you can apply as soon as possible.
        </p>

        <button
          onClick={() => router.push("/auth/sign-up")}
          className="p-3 w-full bg-gradient-to-r rounded-md from-pink-500 via-red-500 to-yellow-500 text-white cursor-pointer font-bold text-lg"
        >
          Get Started
        </button>
      </div>

      {/* decoration circle */}
      <div className="absolute inset-0 shadow-2xl shadow-zinc-900  opacity-50  -z-10 w-[33rem] h-[33rem] bg-radial-[at_25%_25%] from-white to-zinc-900 to-75% rounded-full"></div>
    </section>
  );
};
