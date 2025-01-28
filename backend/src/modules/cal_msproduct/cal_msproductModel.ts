import { z } from "zod";

export type TypePayloadcal_msproduct = {
    cal_product_id: string;
    document_product_id: string;
    cal_product_name: string;
    scale_product: string;
    height: number;
    length: number;
    width: number;
    sum_volume: number;
    cubic_centimeter_calproduct: number;
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    count: number;
    sort_by: number;
};

export const CreateCal_msproductSchema = z.object({
    body: z.object({
        cal_product_name: z.string(),
        scale_product: z.string(),
        height: z.number(),
        length: z.number(),
        width: z.number(),
        sum_volume: z.number(),
        cubic_centimeter_calproduct: z.number(),
        create_by: z.string(),
        count: z.number(),
        sort_by: z.number(),
    }),
});

export const UpdateCal_msproductSchema = z.object({
    body: z.object({
        cal_product_name: z.string(),
        scale_product: z.string(),
        height: z.number(),
        length: z.number(),
        width: z.number(),
        sum_volume: z.number(),
        cubic_centimeter_calproduct: z.number(),
        update_by: z.string(),
        update_date: z.string(),
        count: z.number(),
        sort_by: z.number(),
    }),
});

export const DeleteCal_msproductSchema = z.object({
    params: z.object({
        cal_product_id: z.string(),
    }),
});