import express, { Request, Response } from "express";
import { handleServiceResponse, validateRequest } from "@common/utils/httpHandlers";
import { CreateCal_msboxWithZoneSchema, UpdateCal_msboxWithZoneSchema, DeleteCal_msboxWithZoneSchema } from "@modules/cal_msbox/cal_msboxModel";
import { cal_msboxService } from "./cal_msboxService";

export const cal_msboxRouter = (() => {
    const router = express.Router();

    // API ดึงข้อมูลกล่องทั้งหมดใน Zone
    router.get("/get", async (req: Request, res: Response) => {
        const { zone_id } = req.query; // รับค่า zone_id จาก query string
        const ServiceResponse = await cal_msboxService.findAll(zone_id as string); // ส่งค่า zone_id ไปยัง service
        handleServiceResponse(ServiceResponse, res);
    });

    // API สร้างกล่องใหม่ใน Zone
    router.post("/create", validateRequest(CreateCal_msboxWithZoneSchema),
        async (req: Request, res: Response) => {
            const payload = req.body;
            const { height, lenght, width } = payload;

            // คำนวณปริมาตร
            payload.sum_volume = height * lenght * width;
            payload.cubic_centimeter_calbox = payload.sum_volume;

            const ServiceResponse = await cal_msboxService.create(payload);
            handleServiceResponse(ServiceResponse, res);
        }
    );

    // API อัปเดตข้อมูลกล่องใน Zone
    router.put("/update", validateRequest(UpdateCal_msboxWithZoneSchema),
        async (req: Request, res: Response) => {
            const { cal_box_id } = req.body;
            const payload = req.body;
            const { height, lenght, width } = payload;

            // คำนวณปริมาตร
            payload.sum_volume = height * lenght * width;
            payload.cubic_centimeter_calbox = payload.sum_volume;

            const ServiceResponse = await cal_msboxService.update(cal_box_id, payload);
            handleServiceResponse(ServiceResponse, res);
        }
    );

    // API ลบกล่องใน Zone
    router.delete("/delete/:cal_box_id", validateRequest(DeleteCal_msboxWithZoneSchema),
        async (req: Request, res: Response) => {
            const { cal_box_id } = req.params;
            const { zone_id } = req.query; // รับค่า zone_id จาก query string
            const ServiceResponse = await cal_msboxService.delete(cal_box_id, zone_id as string);
            handleServiceResponse(ServiceResponse, res);
        }
    );

    return router;
})();
