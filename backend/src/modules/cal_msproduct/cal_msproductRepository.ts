import { TypePayloadcal_msproduct } from '@modules/cal_msproduct/cal_msproductModel';
import { cal_msproduct } from "@prisma/client";
import prisma from "@src/db";

export const Keys = [
    "cal_product_id",
    "document_product_id",
    "cal_product_name",
    "scale_product",
    "height",
    "length",
    "width",
    "sum_volume",
    "cubic_centimeter_calproduct",
    "create_by",
    "create_date",
    "update_by",
    "update_date",
    "sort_by",
];

export const cal_msproductRepository = {
    findAllAsync: async () => {
        return prisma.cal_msproduct.findMany({
            select: {
                cal_product_id: true,
                document_product_id: true,
                cal_product_name: true,
                scale_product: true,
                height: true,
                length: true,
                width: true,
                sum_volume: true,
                cubic_centimeter_calproduct: true,
                create_by: true,
                create_date: true,
                update_by: true,
                update_date: true,
                count: true,
                sort_by: true,
            },
        });
    },

    findByName: async <Key extends keyof cal_msproduct>(
        cal_product_name: string,
        keys = Keys as Key[]
    ): Promise<Pick<cal_msproduct, Key> | null> => {
        const selectedFields = keys.reduce(
            (obj, k) => ({ ...obj, [k]: true }),
            {} as Record<Key, true>
        );

        const result = await prisma.cal_msproduct.findFirst({
            where: { cal_product_name: cal_product_name },
            select: selectedFields,
        });

        return result as Pick<cal_msproduct, Key> | null;
    },

    create: async (payload: TypePayloadcal_msproduct) => {
        const cal_product_name = payload.cal_product_name.trim();
        const setPayload: any = {
            cal_product_name: cal_product_name,
            scale_product: payload.scale_product,
            height: payload.height,
            length: payload.length,
            width: payload.width,
            sum_volume: payload.sum_volume,
            cubic_centimeter_calproduct: payload.cubic_centimeter_calproduct,
            create_by: payload.create_by,
            count: payload.count,
            sort_by: payload.sort_by,
        };

        return await prisma.cal_msproduct.create({
            data: setPayload,
        });
    },

    update: async (cal_product_id: string, payload: Partial<TypePayloadcal_msproduct>) => {
        const updatedPayload = {
            ...payload, cal_product_id: payload.cal_product_id ? String(payload.cal_product_id) : undefined,
        };

        return await prisma.cal_msproduct.update({
            where: { cal_product_id: cal_product_id },
            data: updatedPayload,
        });
    },

    delete: async (cal_product_id: string) => {
        return await prisma.cal_msproduct.delete({
            where: { cal_product_id: cal_product_id },
        })
    }
}