-- CreateTable
CREATE TABLE "cal_msbox" (
    "cal_box_id" UUID NOT NULL,
    "document_box_id" TEXT NOT NULL,
    "cal_box_name" TEXT NOT NULL,
    "scale_product" TEXT NOT NULL,
    "height" DOUBLE PRECISION NOT NULL,
    "lenght" DOUBLE PRECISION NOT NULL,
    "width" DOUBLE PRECISION NOT NULL,
    "sum_volume" DOUBLE PRECISION NOT NULL,
    "cubic_centimeter_box" DOUBLE PRECISION NOT NULL,
    "create_by" TEXT,
    "create_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "update_by" TEXT,
    "update_date" TIMESTAMP(3),
    "sort_by" INTEGER NOT NULL,

    CONSTRAINT "cal_msbox_pkey" PRIMARY KEY ("cal_box_id")
);
