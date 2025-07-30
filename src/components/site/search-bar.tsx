"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFilterContext } from "@/contexts/filters/filter-context";
import { Search } from "lucide-react";

const searchSchema = z.object({
  search: z.string(),
});

export const SearchBar = () => {
  const { searchTerm, setSearchTerm } = useFilterContext();
  console.log(searchTerm);

  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: z.infer<typeof searchSchema>) => {
    setSearchTerm(data.search);
    form.reset();
  };
  return (
    <Form {...form}>
      <form
        className="flex items-center justify-center backdrop-blur-lg relative max-w-xl bg-white/60 dark:bg-black/50 w-full p-2"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="search"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <input
                className="w-full border px-5 py-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded-full"
                placeholder="Job title, company, location..."
                {...field}
              />
            </FormItem>
          )}
        />
        <button type="submit" className="absolute right-5 top-4 h-5 w-5">
          <Search />
        </button>
      </form>
    </Form>
  );
};
