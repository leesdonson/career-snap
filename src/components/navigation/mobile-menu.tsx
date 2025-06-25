"use client";

import { AlignJustify } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import Link from "next/link";
import { navLinks } from "./navbar";
import React from "react";
export const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="outline" className="rounded p-1">
          <AlignJustify />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex flex-col gap-3">
        {navLinks.map((link) => (
          <Link
            onClick={() => setOpen(false)}
            className="shadow-sm p-2 text-sm hover:scale-105 transition-all duration-300 ease-in-out rounded border border-slate-600 shadow-blue-600 "
            key={link.name}
            href={link.path}
          >
            {link.name}
          </Link>
        ))}
      </PopoverContent>
    </Popover>
  );
};
