"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { JobPostFilterProvider } from "../filters/filter-context";
import { UserProvider } from "../users/user-context";

export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return (
    <NextThemesProvider {...props}>
      <UserProvider>
        <JobPostFilterProvider>{children}</JobPostFilterProvider>
      </UserProvider>
    </NextThemesProvider>
  );
}
