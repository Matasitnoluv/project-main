import { z } from "zod";

export type TypePayloadmasterproduct = {
    master_product_id: string;
    master_product_name: string;
    scale_product: string;
    height: number;
    length: number;
    width: number;
    cubic_centimeter_product: number;
    create_date: string;
    // create_by: string;
    update_by: string;
    update_date: string;
    description: string;
    image: string;
};

export const CreatMsproductSchema = z.object({
    body: z.object({
        master_product_name: z.string(),
        scale_product: z.string(),
        height: z.number(),
        length: z.number(),
        width: z.number(),
        cubic_centimeter_product: z.number(),
        // create_by: z.string(),
        description: z.string(),
        image: z.string(),
    }),
});

export const UpdateMsproductSchema = z.object({
    body: z.object({
        master_product_name: z.string(),
        scale_product: z.string(),
        height: z.number(),
        length: z.number(),
        width: z.number(),
        cubic_centimeter_product: z.number(),
        description: z.string(),
        image: z.string(),
    }),
});

export const DeleteMsproductSchema = z.object({
    params: z.object({
        master_product_id: z.string(),
    }),
});

