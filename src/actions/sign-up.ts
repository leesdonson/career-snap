"use server";

import { prisma } from "@/lib/db";
import {
  SignUpFormData,
  SignUpResponse,
  signUpSchema,
} from "@/lib/types/sign-up.types";
import bcrypt from "bcryptjs";

export const signUp = async (
  formData: SignUpFormData
): Promise<SignUpResponse> => {
  try {
    const email = formData.email;
    const password = formData.password;

    const validation = signUpSchema.safeParse({
      email,
      password,
    });

    if (!validation.success) {
      throw new Error(
        "Validation failed: " +
          validation.error.errors.map((e) => e.message).join(", ")
      );
    }
    // check if user exists already
    const isUserExist = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (isUserExist) {
      throw new Error("User already exists with this email.");
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });
    const rest = {
      id: user.id,
      email: user.email,
      name: user.name,
      image: user.image,
    };

    console.log(rest);

    return {
      user: rest,
      message: "User created successfully",
    };
  } catch (error) {
    throw new Error("Something went wrong", { cause: error });
  }
};
