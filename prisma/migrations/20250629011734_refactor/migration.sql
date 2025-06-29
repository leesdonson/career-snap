/*
  Warnings:

  - You are about to drop the column `provider_account_id` on the `Account` table. All the data in the column will be lost.
  - You are about to drop the column `access_token` on the `Session` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[provider,providerAccountId]` on the table `Account` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[sessionToken]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `providerAccountId` to the `Account` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sessionToken` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Account_provider_provider_account_id_key";

-- DropIndex
DROP INDEX "Session_access_token_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "provider_account_id",
ADD COLUMN     "providerAccountId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Session" DROP COLUMN "access_token",
ADD COLUMN     "sessionToken" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");
