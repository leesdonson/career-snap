import React from "react";

const Platform = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center p-1">
      <div className="max-w-xl mx-auto p-2 border border-amber-400 rounded-md w-full">
        <h1 className="text-2xl font-bold text-center p-4">
          Choose who you want be in this platform.
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <p className="text-sm border border-slate-500 p-1 rounded">
            <strong>Job Seeker:</strong> If you are looking for a job, you can
            create a profile, search for jobs, and apply directly through the
            platform.
          </p>
          <p className="text-sm border border-slate-500 p-1 rounded">
            <strong>Employer:</strong> If you are an employer, you can create a
            profile, post jobs, and manage applications directly through the
            platform.
          </p>
        </div>
        <div className="w-full text-sm p-2 flex items-center justify-center gap-3">
          <button className="w-full rounded bg-blue-600 text-white p-2">
            <a href="/auth/sign-up">Continue as User</a>
          </button>
          <button className="w-full rounded  bg-blue-600 text-white p-2">
            <a href="/onboarding/company">Continue as Employer</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Platform;
