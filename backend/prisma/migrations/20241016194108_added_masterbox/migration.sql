/*
  Warnings:

  - You are about to drop the column `name` on the `msproduct` table. All the data in the column will be lost.
  - You are about to drop the `msbox` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "msproduct" DROP COLUMN "name",
ADD COLUMN     "master_product_name" TEXT;

-- DropTable
DROP TABLE "msbox";

-- CreateTable
CREATE TABLE "masterbox" (
    "master_box_id" UUID NOT NULL,
    "master_box_name" TEXT,
    "scale_box" TEXT,
    "height" DOUBLE PRECISION,
    "length" DOUBLE PRECISION,
    "width" DOUBLE PRECISION,
    "cubic_centimeter_box" DOUBLE PRECISION,
    "create_by" TEXT,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" TEXT,
    "update_date" TIMESTAMP(3),
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "masterbox_pkey" PRIMARY KEY ("master_box_id")
);
