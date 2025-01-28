/*
  Warnings:

  - Made the column `update_date` on table `masterproduct` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "masterproduct" ALTER COLUMN "update_date" SET NOT NULL;
