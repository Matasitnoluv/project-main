/*
  Warnings:

  - You are about to drop the column `cubic_centimeter_box` on the `cal_msbox` table. All the data in the column will be lost.
  - Added the required column `cubic_centimeter_calbox` to the `cal_msbox` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cal_msbox" DROP COLUMN "cubic_centimeter_box",
ADD COLUMN     "cubic_centimeter_calbox" DOUBLE PRECISION NOT NULL;
