/*
  Warnings:

  - Added the required column `user_id` to the `companies` table without a default value. This is not possible if the table is not empty.
  - Made the column `slug` on table `companies` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."companies" ADD COLUMN     "user_id" TEXT NOT NULL,
ALTER COLUMN "slug" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "public"."companies" ADD CONSTRAINT "companies_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
