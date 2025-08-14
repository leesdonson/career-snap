-- AlterTable
ALTER TABLE "public"."users" ADD COLUMN     "address" VARCHAR(255),
ADD COLUMN     "bio" TEXT,
ADD COLUMN     "city" VARCHAR(255),
ADD COLUMN     "country" VARCHAR(255),
ADD COLUMN     "date_of_birth" TIMESTAMP(3),
ADD COLUMN     "phone" VARCHAR(20),
ADD COLUMN     "postal_code" VARCHAR(20),
ADD COLUMN     "state" VARCHAR(255);
