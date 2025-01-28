import { z } from "zod";

export type TypePayloaduser = {
  users_id: string;
  fullname: string;
  age: number;
  address: string;
  username: string;
  password: string;
  status_role: string;
  create_date: string;
  create_by: string;
  update_by: string;
  update_date: string;
};

export const CreateuserSchema = z.object({
  body: z.object({
    fullname: z.string(),
    age: z.number(),
    address: z.string(),
    username: z.string(),
    password: z.string(),
    status_role: z.string(),
  }),
});

export const UpdateuserSchema = z.object({
  body: z.object({
    fullname: z.string(),
    age: z.number(),
    address: z.string(),
    username: z.string(),
    password: z.string(),
  }),
});

export const DeleteuserSchema = z.object({
  params: z.object({
    users_id: z.string(),
  }),
});
