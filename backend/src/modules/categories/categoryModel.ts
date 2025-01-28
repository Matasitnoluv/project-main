import { commonValidations } from "@common/utils/commonValidation";
import { z } from "zod";

export type TypePayloadCategory = {
    category_name: string;
};


export const CreateCategorySchema = z.object({
    body: z.object({
        category_name: z.string().max(50),
    })
});

export const UpdateCategorySchema = z.object({
    body: z.object({
        id: z.string().uuid(),
        category_name: z.string().max(50),
    })
});

export const GetCategorySchema = z.object({
    params: z.object({
        id: commonValidations.uuid, 
    })
});

export const GetParamCategorySchema = z.object({
    params: z.object({
        id: commonValidations.uuid, 
    })
});

