"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { EyeOff, Eye } from "lucide-react";

const companySignInSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export type CompanySignInType = z.infer<typeof companySignInSchema>;

export const CompanySignInForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);

  const form = useForm<CompanySignInType>({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(companySignInSchema),
  });

  const onSubmit = async (data: CompanySignInType) => {
    // Handle form submission logic here
    console.log(data);
    form.reset();
    // You can add your sign-in logic here, such as calling an API endpoint
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full max-w-xl mx-auto p-4 border border-gray-600 rounded-md shadow-md"
      >
        <h1 className="text-lg font-semibold mb-4 text-center">
          Welcome Back, Sign In as Company.
        </h1>
        <div className="flex flex-col gap-4 mb-5">
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <label htmlFor="email">Company Email</label>
                <FormControl>
                  <input
                    type="email"
                    id="email"
                    {...field}
                    className="border p-2 rounded w-full"
                  />
                </FormControl>
                {form.formState.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </FormItem>
            )}
          />
          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <FormItem className="relative">
                <label htmlFor="password">Admin Password</label>
                <FormControl>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    {...field}
                    className="border p-2 rounded w-full"
                  />
                </FormControl>
                <div className="">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-sm text-blue-600 flex items-center gap-2 mt-1"
                  >
                    {showPassword ? (
                      <EyeOff className="inline h-5 w-5" />
                    ) : (
                      <Eye className="inline h-5 w-5" />
                    )}{" "}
                    {showPassword ? "Hide Password" : "Show Password"}
                  </button>
                </div>
                {form.formState.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {form.formState.errors.password.message}
                  </p>
                )}
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded w-full mt-4"
          >
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
            ) : (
              "Sign In"
            )}
          </button>
        </div>
      </form>
    </Form>
  );
};
