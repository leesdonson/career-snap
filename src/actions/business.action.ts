"use server";

import { prisma } from "@/lib/db";
import { CompanyOnboardingType } from "@/lib/types/company-onboarding";

type NewBiz = CompanyOnboardingType & {
  userId: string;
};

export const createBusiness = async (formData: NewBiz) => {
  try {
    const bizRegNumber = formData.bizRegistrationNumber;
    const taxIdNumber = formData.taxNumber;
    const phoneNumber = formData.phone;
    const slug = formData.name.toLowerCase().split(" ").join("-");

    const owner = await prisma.user.findFirst({
      where: {
        id: formData.userId,
      },
    });

    if (!owner) {
      throw new Error("User not found");
    }

    const existingCompany = await prisma.company.findFirst({
      where: {
        bizRegistrationNumber: bizRegNumber,
      },
    });

    if (existingCompany) {
      return existingCompany;
    }

    const biz = await prisma.company.create({
      data: {
        bizRegistrationNumber: bizRegNumber,
        taxIdNumber: taxIdNumber,
        name: formData.name,
        logo: formData.logo,
        description: formData.description,
        website: formData.website,
        email: formData.email,
        phone: phoneNumber,
        address: formData.address,
        slug,
        userId: owner?.id || "",
      },
    });
    console.log(biz);
    return biz;
  } catch (error) {
    console.log(error);
    return error;
  }
};
