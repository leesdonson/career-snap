"use client";
import React, { useEffect } from "react";

import { getEmployerLinks } from "@/lib/employer-links";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { getCompanyByUserId } from "@/actions/biz-queries";
import { Company } from "@prisma/client";

interface Link {
  label: string;
  href: string;
}

export const Employer = () => {
  const { data: session } = useSession();
  const [company, setCompany] = React.useState<Company | null>(null);

  useEffect(() => {
    const fetchCompany = async () => {
      try {
        const company = await getCompanyByUserId(session?.user?.id!);
        if (!company) {
          console.error("Company not found for this user");
        }
        setCompany(company);
      } catch (error) {
        console.error("Error fetching company:", error);
      }
    };

    fetchCompany();
  }, [session]);

  const navLinks: Link[] = getEmployerLinks(company?.slug!); // Replace 'slug' with actual slug if needed
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="rounded bg-blue-700 px-2 py-1 text-sm text-slate-100">
          Employer
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="text-sm">
        {navLinks.map((link) => (
          <DropdownMenuItem key={link.href}>
            <Link href={link.href}>{link.label}</Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
