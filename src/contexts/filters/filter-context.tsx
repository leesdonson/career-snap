"use client";

import { createContext, useContext, useState } from "react";

interface JobPostContextType {
  title: string;
  setTitle: (filter: string) => void;
  location: string;
  setLocation: (location: string) => void;
  searchTerm: string;
  setSearchTerm: (search: string) => void;
}

const JobPostFilterContext = createContext<JobPostContextType>({
  title: "",
  setTitle: () => {},
  location: "",
  setLocation: () => {},
  searchTerm: "",
  setSearchTerm: () => {},
});

export const JobPostFilterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [title, setTitle] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <JobPostFilterContext.Provider
      value={{
        title,
        setTitle,
        location,
        setLocation,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </JobPostFilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(JobPostFilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
