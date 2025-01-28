import { z } from "zod";

export type TypePayloadUser = {
    username: string;
    password: string;

};

export const LoginUserSchema = z.object({
    body: z.object({
        username: z.string().max(255),
        password: z.string().max(255),
    })
})