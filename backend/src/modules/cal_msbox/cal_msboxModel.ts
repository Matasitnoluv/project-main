import { string, z } from "zod";

export type TypePayloadcal_msbox = {
    cal_box_id: string
    document_box_id: string
    cal_box_name: string
    scale_product: string
    height: number
    lenght: number
    width: number
    sum_volume: number
    cubic_centimeter_calbox: number
    create_by: string
    create_date: string
    update_by: string
    update_date: string
    sort_by: number
};

export const CreateCal_msboxSchema = z.object({
    body: z.object({
        cal_box_name: z.string(),
        scale_product: z.string(),
        height: z.number(),
        lenght: z.number(),
        width: z.number(),
        sum_volume: z.number(),
        cubic_centimeter_calbox: z.number(),
        create_by: z.string(),
        create_date: z.string(),
        sort_by: z.number(),
    }),
});

export const UpdateCal_msboxSchema = z.object({
    body: z.object({
        cal_box_name: z.string(),
        scale_product: z.string(),
        height: z.number(),
        lenght: z.number(),
        width: z.number(),
        sum_volume: z.number(),
        cubic_centimeter_calbox: z.number(),
        update_by: z.string(),
        update_date: z.string(),
        sort_by: z.number(),
    }),
});

export const DeleteCal_msboxSchema = z.object({
    params: z.object({
        cal_box_id: z.string(),
    }),
});
