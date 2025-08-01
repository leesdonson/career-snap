"use client";

import React from "react";
import { Form, FormField, FormItem, FormLabel, FormMessage } from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  companyOnboardingSchema,
  CompanyOnboardingType,
} from "@/lib/types/company-onboarding";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

export const CompanyOnboardingForm = () => {
  const [logoPreview, setLogoPreview] = React.useState<string | null>(null);
  const [image, setImage] = React.useState<string | null>(null);

  const router = useRouter();

  const form = useForm<CompanyOnboardingType>({
    defaultValues: {
      companyName: "",
      companyLogo: "",
      description: "",
      companyEmail: "",
      companyPhone: "",
      companyAddress: "",
      companyRegistrationNumber: "",
      companyTaxNumber: "",
      companyWebsite: "",
    },
    resolver: zodResolver(companyOnboardingSchema),
  });

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    onChange: (file: string) => void
  ) => {
    const files = e?.target?.files;
    const selectedFile = files && files.length > 0 ? files[0] : "";
    const image = selectedFile ? URL.createObjectURL(selectedFile) : "";
    setImage(image);
    setLogoPreview(image);
    onChange(selectedFile.toString());
  };

  const onSubmit = (data: CompanyOnboardingType) => {
    const payload = {
      ...data,
      companyLogo: image,
    };

    console.log(payload);
    router.push("/");
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="border border-slate-500 p-2 w-full rounded-md"
      >
        <h1 className="text-xl p-2 mb-5 text-center font-semibold">
          Company Onboarding
        </h1>
        <div className="flex w-full items-center justify-center mb-4 gap-5">
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Name</FormLabel>
                <input
                  className="w-full border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyEmail"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Email</FormLabel>
                <input
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-5">
          {logoPreview ? (
            <div className="w-[80px] h-[80px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] ring-2 ring-blue-600 rounded-full flex items-center justify-center">
              <Image
                className="w-full h-full object-cover object-center rounded-full"
                src={logoPreview}
                alt="profileImage"
              />
            </div>
          ) : (
            <FormField
              control={form.control}
              name="companyLogo"
              render={({ field: { onChange, ref } }) => (
                <FormItem className="w-full">
                  <p>Company Logo</p>
                  <FormLabel
                    htmlFor="companyLogo"
                    className="cursor-pointer p-2 h-30 rounded-md flex items-center justify-center border-dashed border-2 border-slate-500"
                  >
                    Upload Logo
                    <input
                      className="w-full h-full"
                      id="companyLogo"
                      hidden={true}
                      type="file"
                      ref={ref}
                      onChange={(event) => handleFileChange(event, onChange)}
                    />
                  </FormLabel>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
        </div>
        <div className="mb-5">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Description</FormLabel>
                <textarea
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  placeholder="Short company description."
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-5 flex w-full items-center justify-center gap-5">
          <FormField
            control={form.control}
            name="companyWebsite"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Website</FormLabel>
                <input
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  placeholder="www.company.com"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyPhone"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Phone</FormLabel>
                <input
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-5 flex w-full items-center justify-center gap-5">
          <FormField
            control={form.control}
            name="companyAddress"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Address</FormLabel>
                <input
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="mb-5 flex w-full items-center justify-center gap-5">
          <FormField
            control={form.control}
            name="companyRegistrationNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Registration Number</FormLabel>
                <input
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="companyTaxNumber"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Company Tax Identigication Number</FormLabel>
                <input
                  className="w-full resize-none border p-2 outline-none focus:border-2 focus:border-blue-700 border-slate-500 rounded"
                  type="text"
                  {...field}
                />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="">
          <Button
            disabled={form.formState.isSubmitting}
            type="submit"
            className="w-full md:w-1/3 rounded bg-blue-700 text-slate-50 hover:text-slate-950"
          >
            Preview
          </Button>
        </div>
      </form>
    </Form>
  );
};
