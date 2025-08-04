/*
  Warnings:

  - Added the required column `description` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone` to the `companies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."companies" ADD COLUMN     "description" VARCHAR(255) NOT NULL,
ADD COLUMN     "phone" INTEGER NOT NULL;
