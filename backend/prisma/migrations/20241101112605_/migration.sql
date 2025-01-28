/*
  Warnings:

  - You are about to drop the `msproduct` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "msproduct";

-- CreateTable
CREATE TABLE "masterproduct" (
    "master_product_id" UUID NOT NULL,
    "master_product_name" TEXT,
    "scale_product" TEXT,
    "height" DOUBLE PRECISION,
    "length" DOUBLE PRECISION,
    "width" DOUBLE PRECISION,
    "cubic_centimeter_product" DOUBLE PRECISION,
    "create_by" TEXT,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" TEXT,
    "update_date" TIMESTAMP(3),
    "description" TEXT,
    "image" TEXT,

    CONSTRAINT "masterproduct_pkey" PRIMARY KEY ("master_product_id")
);
