"use server";

import { prisma } from "@/lib/db";
import { z } from "zod";
import bcrypt from "bcryptjs";

const schema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters." }),
});

export const signUp = async (formData: FormData) => {
  try {
    const validation = schema.safeParse({
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    });

    if (!validation.success) {
      return validation.error.formErrors.fieldErrors;
    }
    // check if user exists already
    const isUserExist = await prisma.user.findUnique({
      where: {
        email: formData.get("email") as string,
      },
    });

    if (isUserExist) {
      return {
        error: "User already exists",
      };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(
      formData.get("password") as string,
      salt
    );
    const user = await prisma.user.create({
      data: {
        email: formData.get("email") as string,
        password: hashedPassword,
      },
    });
    const { password, ...rest } = user;

    console.log(rest);

    return {
      user: rest,
      message: "User created successfully",
    };
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};
