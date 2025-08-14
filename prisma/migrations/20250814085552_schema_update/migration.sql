/*
  Warnings:

  - You are about to drop the `comment_replies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `job_post_comments` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `job_post_likes` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."comment_replies" DROP CONSTRAINT "comment_replies_company_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."job_post_comments" DROP CONSTRAINT "job_post_comments_job_post_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."job_post_comments" DROP CONSTRAINT "job_post_comments_user_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."job_post_likes" DROP CONSTRAINT "job_post_likes_job_post_id_fkey";

-- DropForeignKey
ALTER TABLE "public"."job_post_likes" DROP CONSTRAINT "job_post_likes_user_id_fkey";

-- DropTable
DROP TABLE "public"."comment_replies";

-- DropTable
DROP TABLE "public"."job_post_comments";

-- DropTable
DROP TABLE "public"."job_post_likes";
