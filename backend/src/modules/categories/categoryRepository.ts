import { categories } from "@prisma/client";
import prisma from "@src/db";

import { TypePayloadCategory } from "@modules/categories/categoryModel";

export const Keys = [
    "id", 
    "category_name", 
    "created_at", 
    "updated_at"
];

export const categoryRepository = {
    findAllAsync: async () => {
        return prisma.categories.findMany({
            select: {
                category_name: true,
                id: true
            }
        })  
    },

    findByName: async <Key extends keyof categories>(
        category_name: string,
        keys = Keys as Key[]
    ) => {
        return prisma.categories.findUnique({
            where: {category_name: category_name},
            select: keys.reduce(( obj, k) => ({...obj, [k]: true}), {}),
        }) as Promise<Pick<categories, Key> | null>;
    },

    create: async (payload: TypePayloadCategory) => {
        const category_name = payload.category_name.trim();
        const setPayload: any = {
            category_name: category_name,
        };

        return await prisma.categories.create({
            data: setPayload,
        })
    },

    findByIdAsync: async <Key extends keyof categories> (
        id: string,
        keys = Keys as Key[]
    ) => {
        return await prisma.categories.findUnique({
            where: {id: id},
            select: keys.reduce((obj, k) => ({ ...obj, [k]: true }), {}),
        }) as Promise<Pick<categories, Key> | null>;
    },

    update: async(
        id: string,
        payload: TypePayloadCategory
    ) => {
        const trimId = id.trim();
        const trimCategoryName = payload.category_name.trim();
        const setPayload: any = {
            category_name: trimCategoryName,
        }
        return await prisma.categories.update({
            where: {id: trimId},
            data: setPayload,
        }) 
    },

    delete: async (id: string) => {
        const trimId = id.trim();
        return await prisma.categories.delete({
            where: {id: trimId}
        }) 
    }
};

