"use server";
import { prisma } from "@/lib/db";

export const getCompany = async (slug: string) => {
  try {
    const companyData = await prisma.company.findUnique({
      where: { slug },
    });

    if (!companyData) {
      throw new Error("Company not found");
    }

    return companyData;
  } catch (error) {
    console.error("Error fetching company:", error);
    throw error;
  }
};

export const getCompanies = async () => {
  try {
    const companiesData = await prisma.company.findMany();
    return companiesData;
  } catch (error) {
    console.error("Error fetching companies:", error);
    throw error;
  }
};

export const getCompanyByUserId = async (userId: string) => {
  try {
    const companyData = await prisma.company.findFirst({
      where: { userId },
    });

    if (!companyData) {
      throw new Error("Company not found for this user");
    }

    return companyData;
  } catch (error) {
    console.error("Error fetching company by user ID:", error);
    throw error;
  }
};
