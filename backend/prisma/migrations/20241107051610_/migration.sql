-- AlterTable
ALTER TABLE "cal_msbox" ALTER COLUMN "document_box_id" DROP NOT NULL,
ALTER COLUMN "sum_volume" DROP NOT NULL,
ALTER COLUMN "create_date" DROP NOT NULL,
ALTER COLUMN "sort_by" DROP NOT NULL,
ALTER COLUMN "cubic_centimeter_calbox" DROP NOT NULL;
