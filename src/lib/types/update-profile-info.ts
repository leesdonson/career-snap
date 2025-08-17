import { date, z } from "zod";

export const updateProfileInfoSchema = z.object({
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must not exceed 15 digits"),
  city: z.string().optional(),
  country: z.string().optional(),
  linkedin: z.string().url("Invalid URL format").optional(),
  dateOfBirth: date().optional(),
  address: z.string().optional(),
});

export type UpdateProfileInfo = z.infer<typeof updateProfileInfoSchema>;
