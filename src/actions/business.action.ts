"use server";

import { prisma } from "@/lib/db";
import { CompanyOnboardingType } from "@/lib/types/company-onboarding";

export const createBusiness = async (formData: CompanyOnboardingType) => {
  try {
    const bizRegNumber = formData.bizRegistrationNumber;
    const taxIdNumber = formData.taxNumber;
    const phoneNumber = formData.phone;

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
      },
    });
    console.log(biz);
    return biz;
  } catch (error) {
    console.log(error);
  }
};
