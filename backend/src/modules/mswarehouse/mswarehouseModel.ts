import { z } from "zod";

export type TypePayloadMsWarehouse = {
    warehouse_id: string; // ID ของคลังสินค้า
    zone_id: string; // Zone ที่อยู่ใน Warehouse
    cal_box_id: string; // ID ของกล่อง
    cal_box_name: string;
    height: number;
    lenght: number;
    width: number;
    sum_volume: number; // ปริมาตรของกล่อง
    cubic_centimeter_calbox: number; // ปริมาตรในหน่วยลูกบาศก์เซนติเมตร
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    sort_by: number;
};

export const CreateMsWarehouseSchema = z.object({
    body: z.object({
        warehouse_id: z.string(), // ID ของคลังสินค้า
        zone_id: z.string(), // Zone ที่กล่องอยู่
        cal_box_name: z.string(),
        height: z.number(),
        lenght: z.number(),
        width: z.number(),
        sum_volume: z.number(),
        cubic_centimeter_calbox: z.number(),
        create_by: z.string(),
        create_date: z.string(),
        sort_by: z.number(),
    }),
});

export const DeleteMsWarehouseSchema = z.object({
    params: z.object({
        warehouse_id: z.string(), // ID ของคลังสินค้า
    }),
});

export const UpdateMsWarehouseSchema = z.object({
    body: z.object({
        zone_id: z.string(), // Zone ที่กล่องอยู่
        cal_box_name: z.string(),
        height: z.number(),
        lenght: z.number(),
        width: z.number(),
        sum_volume: z.number(),
        cubic_centimeter_calbox: z.number(),
        create_by: z.string(),
        create_date: z.string(),
        sort_by: z.number(),
    }),
});
