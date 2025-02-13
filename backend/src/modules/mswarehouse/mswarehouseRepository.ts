import { masterwarehouse } from "@prisma/client";
import prisma from "@src/db";
import { TypePayloadmasterwarehouse } from "@modules/mswarehouse/mswarehouseModel";

export const WarehouseKeys = [
  "master_warehouse_id",
  "master_warehouse_name",
  "create_by",
  "create_date",
  "update_by",
  "update_date",
  "description",
  "image",
];

export const mswarehouseRepository = {
  findAllAsync: async () => {
    return prisma.masterwarehouse.findMany({
      select: {
        master_warehouse_id: true,
        master_warehouse_name: true,
        create_by: true,
        create_date: true,
        update_by: true,
        update_date: true,
        description: true,
        image: true,
      },
    });
  },

  findByName: async <Key extends keyof masterwarehouse>(
    master_warehouse_name: string,
    keys = WarehouseKeys as Key[]
  ): Promise<Pick<masterwarehouse, Key> | null> => {
    const selectedFields = keys.reduce(
      (obj, k) => ({ ...obj, [k]: true }),
      {} as Record<Key, true>
    );

    const result = await prisma.masterwarehouse.findFirst({
      where: { master_warehouse_name: master_warehouse_name },
      select: selectedFields,
    });

    return result as Pick<masterwarehouse, Key> | null;
  },

  create: async (payload: TypePayloadmasterwarehouse) => {
    const master_warehouse_name = payload.master_warehouse_name.trim();
    const setPayload: any = {
      master_warehouse_name: master_warehouse_name,
      description: payload.description,
      image: payload.image,
    };

    return await prisma.masterSwarehouse.create({
      data: setPayload,
    });
  },

  update: async (master_warehouse_id: string, payload: Partial<TypePayloadmasterwarehouse>) => {
    const updatedPayload = {
      ...payload, master_warehouse_id: payload.master_warehouse_id ? String(payload.master_warehouse_id) : undefined,
    };

    return await prisma.masterwarehouse.update({
      where: { master_warehouse_id: master_warehouse_id },
      data: updatedPayload,
    });
  },

  delete: async (master_warehouse_id: string) => {
    return await prisma.masterwarehouse.delete({
      where: { master_warehouse_id: master_warehouse_id },
    });
  },
};