import { z } from "zod";

export type TypePayloadmasterbox = {
  master_box_id: string;
  master_box_name: string;
  scale_box: string;
  height: number;
  length: number;
  width: number;
  cubic_centimeter_box: number;
  create_by: string;
  create_date: string;
  update_by: string;
  update_date: string;
  description: string;
  image: string;
};

export const CreateMsboxSchema = z.object({
  body: z.object({
    master_box_name: z.string().max(50),
    scale_box: z.string(),
    height: z.number(),
    length: z.number(),
    width: z.number(),
    cubic_centimeter_box: z.number(),
    description: z.string(),
    image: z.string(),
  }),
});

export const UpdateMsboxSchema = z.object({
  body: z.object({
    master_box_id: z.string(),
    master_box_name: z.string().max(50),
    scale_box: z.string(),
    height: z.number(),
    length: z.number(),
    width: z.number(),
    cubic_centimeter_box: z.number(),
    update_by: z.string(),
    update_date: z.string(),
    description: z.string(),
    image: z.string(),
  }),
});

export const DeleteMsboxSchema = z.object({
  params: z.object({
    master_box_id: z.string(),
  }),
});
