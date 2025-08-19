import { date, z } from "zod";

export const updateProfileInfoSchema = z.object({
  phone: z
    .string()
    .min(8, "Phone number must be at least 8 digits")
    .max(8, "Phone number must not exceed 8 digits"),
  city: z.string().optional(),
  country: z.string().optional(),
  dateOfBirth: date().optional(),
  address: z.string().optional(),
});

export type UpdateProfileInfo = z.infer<typeof updateProfileInfoSchema>;
