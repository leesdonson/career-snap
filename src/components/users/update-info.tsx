"use client";

import React from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import {
  UpdateProfileInfo,
  updateProfileInfoSchema,
} from "@/lib/types/update-profile-info";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import Loading from "@/app/(site)/jobseekers/loading";

const UpdateInfo = () => {
  const date = new Date();
  const form = useForm<UpdateProfileInfo>({
    defaultValues: {
      phone: "",
      city: "",
      country: "",
      linkedin: "",
      dateOfBirth: date,
      address: "",
    },
    mode: "onBlur",
    reValidateMode: "onChange",
    resolver: zodResolver(updateProfileInfoSchema),
  });
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const isSubmitting = form.formState.isSubmitting;
  //   const isSubmitting = true;

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-3 w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className="flex items-center justify-center gap-3 w-full">
          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    className="w-full border rounded p-2 focus:border-blue-500 outline-none"
                    placeholder="Phone Number"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="city"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    className="w-full border rounded p-2 focus:border-blue-500 outline-none"
                    placeholder="City"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex items-center justify-center gap-3 w-full">
          <FormField
            name="country"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    className="w-full border rounded p-2 focus:border-blue-500 outline-none"
                    placeholder="Country"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    className="w-full border rounded p-2 focus:border-blue-500 outline-none"
                    placeholder="Address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="flex mb-5 items-center justify-center gap-3 w-full">
          <FormField
            name="dateOfBirth"
            control={form.control}
            render={({ field: { value, onChange } }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    className="w-1/2 border rounded p-2 focus:border-blue-500 outline-none"
                    placeholder="Date of Birth"
                    type="date"
                    onChange={() => onChange(value)}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="py-2">
          <Button disabled={isSubmitting} className="rounded" type="submit">
            {isSubmitting ? (
              <div className="w-full flex items-center justify-center space-x-2">
                <Loading />
                <span className="text-sm">Updating...</span>
              </div>
            ) : (
              "Update Info"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default UpdateInfo;
