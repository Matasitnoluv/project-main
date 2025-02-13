import { mszone } from "@prisma/client";
import prisma from "@src/db";
import { TypePayloadmszone } from "@modules/mszone/mszoneModel";

// กำหนดคีย์ของโมเดล mszone
export const Keys = [
  "mszone_id",
  "mszone_name",
  "height",
  "length",
  "width",
  "cubic_centimeter_zone",
  "create_by",
  "update_by",
  "update_date",
  "description",
  "image",
];

export const mszoneRepository = {
  findAllAsync: async () => {
    return prisma.mszone.findMany({
      select: {
        mszone_id: true,
        mszone_name: true,
        height: true,
        length: true,
        width: true,
        cubic_centimeter_zone: true,
        create_by: true,
        create_date: true,
        update_by: true,
        update_date: true,
        description: true,
        image: true,
      },
    });
  },

  findByName: async <Key extends keyof mszone>(
    mszone_name: string,
    keys = Keys as Key[]
  ): Promise<Pick<mszone, Key> | null> => {
    const selectedFields = keys.reduce(
      (obj, k) => ({ ...obj, [k]: true }),
      {} as Record<Key, true>
    );

    const result = await prisma.mszone.findFirst({
      where: { mszone_name: mszone_name },
      select: selectedFields,
    });

    return result as Pick<mszone, Key> | null;
  },

  create: async (payload: TypePayloadmszone) => {
    const mszone_name = payload.mszone_name.trim();
    const setPayload: any = {
      mszone_name: mszone_name,
      height: payload.height, 
      length: payload.length,
      width: payload.width,
      cubic_centimeter_zone: payload.cubic_centimeter_zone,
      description: payload.description,
      image: payload.image,
    };

    return
