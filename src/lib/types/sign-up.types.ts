import { z } from "zod";

export const signUpSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export type SignUpFormData = z.infer<typeof signUpSchema>;

export type SignUpResponse =
  | { error: string }
  | {
      user: {
        id: string;
        email: string;
        name: string | null;
        image: string | null;
      };
      message: string;
    }
  | null;
