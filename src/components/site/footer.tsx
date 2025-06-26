import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-black/50 relative w-full flex flex-col">
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="flex justify-between px-5 py-2">
        <div className="flex flex-col">
          <h3 className="font-bold">CareerSnap</h3>
          <ul className="text-sm">
            <li>Main St. 123, City, State, Country</li>
            <li>(123) 456-7890 | (987) 654-3210</li>
            <li>Port Moresby, PG</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h3 className="font-bold text-blue-600">Career</h3>
          <ul className="text-sm">
            <li>Vacancies</li>
            <li>Internships</li>
            <li>Apply</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-blue-600">Quick Links</h3>
          <ul className="text-sm">
            <li>Home</li>
            <li>About</li>
            <li>Jobs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="">
          <h3 className="font-bold text-blue-600">Follow Us</h3>
          <ul className="text-sm">
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>LinkedIn</li>
          </ul>
        </div>
      </div>
      <small className="p-3 w-full">
        &copy; 2025 CareerSnap | All rights reserved.
      </small>
    </footer>
  );
};
