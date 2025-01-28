/*
  Warnings:

  - Made the column `update_date` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "user" ALTER COLUMN "update_date" SET NOT NULL;
