-- CreateTable
CREATE TABLE "cal_msproduct" (
    "cal_product_id" UUID NOT NULL,
    "document_product_id" TEXT,
    "cal_product_name" TEXT NOT NULL,
    "scale_box" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "length" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "sum_volume" DOUBLE PRECISION NOT NULL,
    "cubic_centimeter_calproduct" DOUBLE PRECISION NOT NULL,
    "create_by" TEXT,
    "create_date" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "update_by" TEXT,
    "update_date" TIMESTAMP(3),
    "count" INTEGER,
    "sort_by" INTEGER,

    CONSTRAINT "cal_msproduct_pkey" PRIMARY KEY ("cal_product_id")
);
