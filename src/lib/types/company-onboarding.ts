import z from "zod";

const fileSchema = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "File must be an image",
  });

export const companyOnboardingSchema = z.object({
  companyName: z.string().min(3, { message: "Please enter company name." }),
  companyLogo: z
    .string(fileSchema)
    .min(3, { message: "Please add company logo." }),
  description: z
    .string()
    .min(3, { message: "Please add company description." }),
  companyWebsite: z.string().min(3, { message: "Please add company website." }),
  companyEmail: z
    .string()
    .email({ message: "Please enter a valid email address." }),
  companyPhone: z
    .string()
    .min(3, { message: "Please add company phone number." }),
  companyAddress: z.string().min(3, { message: "Please add company address." }),
  companyRegistrationNumber: z
    .string()
    .min(3, { message: "Please add company registration number." }),
  companyTaxNumber: z
    .string()
    .min(3, { message: "Please add company tax number." }),
});

export type CompanyOnboardingType = z.infer<typeof companyOnboardingSchema>;
