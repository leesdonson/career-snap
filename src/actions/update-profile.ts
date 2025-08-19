"use server";

import { prisma } from "@/lib/db";
import { UpdateProfileInfo } from "@/lib/types/update-profile-info";
import { z } from "zod";
import { revalidatePath } from "next/cache";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/_auth/next-auth-options";
const schema = z.object({
  phone: z.string().optional(),
  city: z.string().optional(),
  country: z.string().optional(),
  dateOfBirth: z.string().optional(),
  address: z.string().optional(),
});

export const updateProfileInfo = async (data: UpdateProfileInfo) => {
  const parsedData = schema.safeParse(data);
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }
  //   console.log("User session: ", session);
  console.log(data);
  if (!parsedData.success) {
    throw new Error("Invalid data provided");
  }

  const { phone, city, country, dateOfBirth, address } = parsedData.data;

  try {
    await prisma.user.update({
      where: { id: session?.user?.id },
      data: {
        phone,
        city,
        country,
        dateOfBirth: dateOfBirth ? new Date(dateOfBirth) : null,
        address,
      },
    });
    revalidatePath("/profile");

    return { success: true };
  } catch (error) {
    console.error("Error updating profile:", error);
    throw new Error("Failed to update profile");
  }
};

export const updateUserName = async (name: string) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { name },
    });
    revalidatePath(`/user/${session.user.id}`);

    return { success: true };
  } catch (error) {
    console.error("Error updating user name:", error);
    throw new Error("Failed to update user name");
  }
};

export const updateUserImage = async (imageUrl: string) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { image: imageUrl },
    });
    revalidatePath(`/user/${session.user.id}`);

    return { success: true };
  } catch (error) {
    console.error("Error updating user image:", error);
    throw new Error("Failed to update user image");
  }
};

export const updateUserBio = async (bio: string) => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.id) {
    throw new Error("User not authenticated");
  }

  try {
    await prisma.user.update({
      where: { id: session.user.id },
      data: { bio },
    });
    revalidatePath(`/user/${session.user.id}`);

    return { success: true };
  } catch (error) {
    console.error("Error updating user bio:", error);
    throw new Error("Failed to update user bio");
  }
};
