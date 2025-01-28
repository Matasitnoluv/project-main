import { masterbox } from "@prisma/client";
import prisma from "@src/db";
import { TypePayloadmasterbox } from "@modules/msbox/msboxModel";

export const Keys = [
  "master_box_id",
  "master_box_name",
  "scale_box",
  "height",
  "length",
  "width",
  "cubic_centimeter_box",
  "create_by",
  "update_by",
  "update_date",
  "description",
  "image",
];

export const msboxRepository = {
  findAllAsync: async () => {
    return prisma.masterbox.findMany({
      select: {
        master_box_id: true,
        master_box_name: true,
        scale_box: true,
        height: true,
        length: true,
        width: true,
        cubic_centimeter_box: true,
        create_by: true,
        create_date: true,
        update_by: true,
        update_date: true,
        description: true,
        image: true,
      },
    });
  },

  findByName: async <Key extends keyof masterbox>(
    master_box_name: string,
    keys = Keys as Key[]
  ): Promise<Pick<masterbox, Key> | null> => {
    const selectedFields = keys.reduce(
      (obj, k) => ({ ...obj, [k]: true }),
      {} as Record<Key, true>
    );

    const result = await prisma.masterbox.findFirst({
      where: { master_box_name: master_box_name },
      select: selectedFields,
    });

    return result as Pick<masterbox, Key> | null;
  },

  create: async (payload: TypePayloadmasterbox) => {
    const master_box_name = payload.master_box_name.trim();
    const setPayload: any = {
      master_box_name: master_box_name,
      scale_box: payload.scale_box,
      height: payload.height, // Corrected typo from `height` to `height`
      length: payload.length, // Corrected typo from `length` to `length`
      width: payload.width, // Corrected typo from `width` to `width`
      cubic_centimeter_box: payload.cubic_centimeter_box,
      description: payload.description,
      image: payload.image,
    };

    return await prisma.masterbox.create({
      data: setPayload,
    });
  },

  update: async (master_box_id: string, payload: Partial<TypePayloadmasterbox>) => {
    const updatedPayload = {
      ...payload, master_box_id: payload.master_box_id ? String(payload.master_box_id) : undefined,
    };

    return await prisma.masterbox.update({
      where: { master_box_id: master_box_id },
      data: updatedPayload,
    });
  },

  delete: async (master_box_id: string) => {
    return await prisma.masterbox.delete({
      where: { master_box_id: master_box_id },
    });
  },
};
