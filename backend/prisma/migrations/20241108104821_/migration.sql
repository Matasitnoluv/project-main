/*
  Warnings:

  - You are about to drop the column `scale_box` on the `cal_msproduct` table. All the data in the column will be lost.
  - Added the required column `scale_product` to the `cal_msproduct` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cal_msproduct" DROP COLUMN "scale_box",
ADD COLUMN     "scale_product" TEXT NOT NULL;
