import { z } from "zod";

export type TypePayloadMsZone = {
    zone_id: string; // ID ของโซน
    warehouse_id: string; // ID ของคลังสินค้าที่โซนนี้อยู่
    zone_name: string; // ชื่อโซน
    description: string; // คำอธิบาย
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    sort_by: number;
};

export const CreateMsZoneSchema = z.object({
    body: z.object({
        zone_id: z.string(), // ID ของโซน
        warehouse_id: z.string(), // ID ของคลังสินค้า
        zone_name: z.string(),
        description: z.string(),
        create_by: z.string(),
        create_date: z.string(),
        sort_by: z.number(),
    }),
});

export const DeleteMsZoneSchema = z.object({
    params: z.object({
        zone_id: z.string(), // ID ของโซน
    }),
});

export const UpdateMsZoneSchema = z.object({
    body: z.object({
        zone_name: z.string(),
        description: z.string(),
        create_by: z.string(),
        create_date: z.string(),
        sort_by: z.number(),
    }),
});
