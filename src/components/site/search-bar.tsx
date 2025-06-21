"use client";

import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormLabel } from "../ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const searchSchema = z.object({
  search: z.string(),
});

export const SearchBar = () => {
  const form = useForm<z.infer<typeof searchSchema>>({
    resolver: zodResolver(searchSchema),
    defaultValues: {
      search: "",
    },
  });

  const onSubmit = (data: z.infer<typeof searchSchema>) => {
    console.log(data);
  };
  return (
    <Form {...form}>
      <form
        className="flex max-w-xl bg-white/40 dark:bg-black/40 w-full p-4 rounded-md shadow-2xl border border-slate-400 dark:border-neutral-600 shadow-blue-600"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          name="search"
          control={form.control}
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Search</FormLabel>
              <input
                className="w-full border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                placeholder="Job title, company, location..."
                {...field}
              />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};
