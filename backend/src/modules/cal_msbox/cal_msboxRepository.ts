import { cal_msbox } from "@prisma/client";
import prisma from "@src/db";
import { TypePayloadcal_msbox } from "@modules/cal_msbox/cal_msboxModel";

export const Keys = [
    "cal_box_id",
    "document_box_id",
    "cal_box_name",
    "scale_product",
    "height",
    "lenght",
    "width",
    "sum_volume",
    "cubic_centimeter_calbox",
    "create_by",
    "create_date",
    "update_by",
    "update_date",
    "sort_by",
];

export const cal_msboxRepository = {
    findAllAsync: async () => {
        return prisma.cal_msbox.findMany({
            select: {
                cal_box_id: true,
                document_box_id: true,
                cal_box_name: true,
                scale_product: true,
                height: true,
                lenght: true,
                width: true,
                sum_volume: true,
                cubic_centimeter_calbox: true,
                create_by: true,
                create_date: true,
                update_by: true,
                update_date: true,
                sort_by: true,
            },
        });
    },

    findByName: async <Key extends keyof cal_msbox>(
        cal_box_name: string,
        keys = Keys as Key[]
    ): Promise<Pick<cal_msbox, Key> | null> => {
        const selectedFields = keys.reduce(
            (obj, k) => ({ ...obj, [k]: true }),
            {} as Record<Key, true>
        );

        const result = await prisma.cal_msbox.findFirst({
            where: { cal_box_name: cal_box_name },
            select: selectedFields,
        });

        return result as Pick<cal_msbox, Key> | null;
    },

    create: async (payload: TypePayloadcal_msbox) => {
        const cal_box_name = payload.cal_box_name.trim();
        const setPayload: any = {
            cal_box_name: cal_box_name,
            scale_product: payload.scale_product,
            height: payload.height,
            lenght: payload.lenght,
            width: payload.width,
            sum_volume: payload.sum_volume,
            cubic_centimeter_calbox: payload.cubic_centimeter_calbox,
            create_by: payload.create_by,
            create_date: payload.create_date,
            sort_by: payload.sort_by,
        };

        return await prisma.cal_msbox.create({
            data: setPayload,
        });
    },

    update: async (cal_box_id: string, payload: Partial<TypePayloadcal_msbox>) => {
        const updatedPayload = {
            ...payload, cal_box_id: payload.cal_box_id ? String(payload.cal_box_id) : undefined,
        };

        return await prisma.cal_msbox.update({
            where: { cal_box_id: cal_box_id },
            data: updatedPayload,
        });
    },

    delete: async (cal_box_id: string) => {
        return await prisma.cal_msbox.delete({
            where: { cal_box_id: cal_box_id },
        });
    },
};