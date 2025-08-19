"use server";
import { prisma } from "@/lib/db";

export const getUserDetails = async (userId: string) => {
  const user = await prisma.user.findFirst({
    where: { id: userId },
  });
  return user;
};
