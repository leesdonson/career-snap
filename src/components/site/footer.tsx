import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import { LiaExternalLinkAltSolid } from "react-icons/lia";
export const Footer = () => {
  return (
    <footer className="bg-white/50 dark:bg-black/50 relative w-full flex flex-col">
      <div className="absolute -z-10 bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" />
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5 py-2">
        <div className="flex flex-col">
          <h3 className="font-bold">CareerSnap</h3>
          <ul className="text-sm">
            <li>Main St. 123, City, State, Country</li>
            <li>(123) 456-7890 | (987) 654-3210</li>
            <li>Port Moresby, PG</li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-blue-600">Career</h3>
          <ul className="text-sm flex flex-col gap-1">
            <li className="flex gap-1 items-center">
              <Link
                className="flex gap-1 items-center hover:underline underline-offset-2"
                href={"/vacancies"}
              >
                Vacancies
                <LiaExternalLinkAltSolid size={18} />
              </Link>
            </li>
            <li className="flex gap-1 items-center">
              <Link
                className="flex gap-1 items-center hover:underline underline-offset-2"
                href={"/vacancies"}
              >
                Internship
                <LiaExternalLinkAltSolid size={18} />
              </Link>
            </li>
            <li className="flex gap-1 items-center">
              <Link
                className="flex gap-1 items-center hover:underline underline-offset-2"
                href={"/vacancies"}
              >
                Career Expo
                <LiaExternalLinkAltSolid size={18} />
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-blue-600">Quick Links</h3>
          <ul className="text-sm">
            <li>
              <Link
                href={"/about-us"}
                className="flex gap-1 items-center hover:underline underline-offset-2"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href={"/about-us"}
                className="flex gap-1 items-center hover:underline underline-offset-2"
              >
                Resources
              </Link>
            </li>
            <li>
              <Link
                href={"/about-us"}
                className="flex gap-1 items-center hover:underline underline-offset-2"
              >
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="font-bold text-blue-600">Follow Us</h3>
          <ul className="flex gap-3">
            <li>
              <FaFacebook size={20} />
            </li>
            <li>
              <FaXTwitter size={20} />
            </li>
            <li>
              <FaInstagram size={20} />
            </li>
          </ul>
        </div>
      </div>
      <small className="p-3 w-full">
        &copy; 2025 CareerSnap | All rights reserved.
      </small>
    </footer>
  );
};
