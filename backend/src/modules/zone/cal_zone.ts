import { z } from "zod";

// TypeScript Type สำหรับ Payload ที่มี Zone
export type TypePayloadcal_msbox_with_zone = {
    zone_id: string; // ระบุ Zone
    cal_box_id: string;
    document_box_id: string;
    cal_box_name: string;
    scale_product: string;
    height: number;
    lenght: number;
    width: number;
    sum_volume: number;
    cubic_centimeter_calbox: number;
    create_by: string;
    create_date: string;
    update_by: string;
    update_date: string;
    sort_by: number;
};

// Schema สำหรับการสร้างกล่องพร้อม Zone
export const CreateCal_msboxWithZoneSchema = z.object({
    body: z.object({
        zone_id: z.string(), // Zone ที่กล่องนี้อยู่
        cal_box_name: z.string(),
        scale_product: z.string(),
        height: z.number().min(1, "Height must be greater than 0"),
        lenght: z.number().min(1, "Length must be greater than 0"),
        width: z.number().min(1, "Width must be greater than 0"),
        sum_volume: z.number(),
        cubic_centimeter_calbox: z.number(),
        create_by: z.string(),
        create_date: z.string(),
        sort_by: z.number(),
    }),
});

// Schema สำหรับการอัปเดตกล่องพร้อม Zone
export const UpdateCal_msboxWithZoneSchema = z.object({
    body: z.object({
        zone_id: z.string(), // Zone ที่กล่องนี้อยู่
        cal_box_name: z.string(),
        scale_product: z.string(),
        height: z.number().min(1, "Height must be greater than 0"),
        lenght: z.number().min(1, "Length must be greater than 0"),
        width: z.number().min(1, "Width must be greater than 0"),
        sum_volume: z.number(),
        cubic_centimeter_calbox: z.number(),
        update_by: z.string(),
        update_date: z.string(),
        sort_by: z.number(),
    }),
});

// Schema สำหรับการลบกล่องตาม Zone
export const DeleteCal_msboxWithZoneSchema = z.object({
    params: z.object({
        zone_id: z.string(), // Zone ที่จะลบ
        cal_box_id: z.string(), // ID ของกล่องที่อยู่ใน Zone
    }),
});

// ตัวอย่างการคำนวณขนาดกล่องใน Zone
export function calculateVolume(height: number, length: number, width: number): number {
    return height * length * width;
}

// ตัวอย่างการใช้งาน
const exampleInput = {
    body: {
        zone_id: "zone123",
        cal_box_name: "Box A",
        scale_product: "Product X",
        height: 10,
        lenght: 20,
        width: 15,
        sum_volume: 0, // จะคำนวณจากฟังก์ชัน
        cubic_centimeter_calbox: 0, // จะคำนวณจากฟังก์ชัน
        create_by: "Admin",
        create_date: "2025-01-01",
        sort_by: 1,
    },
};

// คำนวณ volume และ cubic_centimeter_calbox
exampleInput.body.sum_volume = calculateVolume(
    exampleInput.body.height,
    exampleInput.body.lenght,
    exampleInput.body.width
);
exampleInput.body.cubic_centimeter_calbox = exampleInput.body.sum_volume;

console.log("Calculated Box Data:", exampleInput);