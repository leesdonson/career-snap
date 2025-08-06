import z from "zod";

const fileSchema = z
  .instanceof(File)
  .refine((file) => file.type.startsWith("image/"), {
    message: "File must be an image",
  });

export const companyOnboardingSchema = z.object({
  name: z.string().min(3, { message: "Please enter company name." }),
  logo: z.string(fileSchema).min(3, { message: "Please add company logo." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
  description: z
    .string()
    .min(3, { message: "Please add company description." }),
  website: z.string().min(3, { message: "Please add company website." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(3, { message: "Please add company phone number." }),
  address: z.string().min(3, { message: "Please add company address." }),
  bizRegistrationNumber: z
    .string()
    .min(3, { message: "Please add company registration number." }),
  taxNumber: z.string().min(3, { message: "Please add company tax number." }),
});

export type CompanyOnboardingType = z.infer<typeof companyOnboardingSchema>;
