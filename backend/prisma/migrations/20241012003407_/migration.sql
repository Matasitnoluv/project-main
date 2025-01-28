-- CreateTable
CREATE TABLE "msbox" (
    "master_box_id" UUID NOT NULL,
    "name" TEXT,
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

    CONSTRAINT "msbox_pkey" PRIMARY KEY ("master_box_id")
);

-- CreateTable
CREATE TABLE "msproduct" (
    "master_product_id" UUID NOT NULL,
    "name" TEXT,
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

    CONSTRAINT "msproduct_pkey" PRIMARY KEY ("master_product_id")
);
