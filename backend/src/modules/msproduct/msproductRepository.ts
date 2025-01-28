import { masterproduct } from "@prisma/client";
import prisma from "@src/db";
import { TypePayloadmasterproduct } from "@modules/msproduct/msproductModel";

export const Keys = [
    "master_product_id",
    "master_product_name",
    "scale_product",
    "height",
    "length",
    "width",
    "cubic_centimeter_product",
    // "create_by",
    "update_by",
    "update_date",
    "description",
    "image",
];

export const msproductRepository = {
    findAllAsync: async () => {
        return prisma.masterproduct.findMany({
            select: {
                master_product_id: true,
                master_product_name: true,
                scale_product: true,
                height: true,
                length: true,
                width: true,
                cubic_centimeter_product: true,
                // create_by: true,
                create_date: true,
                update_by: true,
                update_date: true,
                description: true,
                image: true,
            },
        });
    },

    findByName: async <Key extends keyof masterproduct>(
        master_product_name: string,
        keys = Keys as Key[]
    ): Promise<Pick<masterproduct, Key> | null> => {
        const selectedFields = keys.reduce(
            (obj, k) => ({ ...obj, [k]: true }),
            {} as Record<Key, true>
        );

        const result = await prisma.masterproduct.findFirst({
            where: { master_product_name: master_product_name },
            select: selectedFields,
        });

        return result as Pick<masterproduct, Key> | null;
    },

    create: async (payload: TypePayloadmasterproduct) => {
        const master_product_name = payload.master_product_name.trim();
        const setPayload: any = {
            master_product_name: master_product_name,
            scale_product: payload.scale_product,
            height: payload.height,
            length: payload.length,
            width: payload.width,
            cubic_centimeter_product: payload.cubic_centimeter_product,
            description: payload.description,
            image: payload.image,
        };

        return await prisma.masterproduct.create({
            data: setPayload,
        });
    },

    update: async (master_product_id: string, payload: Partial<TypePayloadmasterproduct>) => {
        const updatedPayload = {
            ...payload, master_product_id: payload.master_product_id ? String(payload.master_product_id) : undefined,
        };

        return await prisma.masterproduct.update({
            where: { master_product_id: master_product_id },
            data: updatedPayload,
        });
    },

    delete: async (mater_product_id: string) => {
        return await prisma.masterproduct.delete({
            where: { master_product_id: mater_product_id },
        });

    },

};