import express, { Request, Response } from "express";
import { handleServiceResponse, validateRequest, } from "@common/utils/httpHandlers";
import { cal_msbox } from "@prisma/client";
import { CreateCal_msboxSchema, UpdateCal_msboxSchema, DeleteCal_msboxSchema } from "@modules/cal_msbox/cal_msboxModel";
import { cal_msboxService } from "./cal_msboxService";

export const cal_msboxRouter = (() => {
    const router = express.Router();
    router.get("/get", async (req: Request, res: Response) => {
        const ServiceResponse = await cal_msboxService.findAll();
        handleServiceResponse(ServiceResponse, res);
    });

    router.post("/create", validateRequest(CreateCal_msboxSchema),
        async (req: Request, res: Response) => {
            const payload = req.body;
            const ServiceResponse = await cal_msboxService.create(payload);
            handleServiceResponse(ServiceResponse, res);
            //   console.log(payload);
        }
    );

    router.put("/update", validateRequest(UpdateCal_msboxSchema),
        async (req: Request, res: Response) => {
            const { cal_box_id } = req.body;
            const payload = req.body;
            const ServiceResponse = await cal_msboxService.update(cal_box_id, payload);
            handleServiceResponse(ServiceResponse, res);
        }
    );

    router.delete("/delete/:cal_box_id", validateRequest(DeleteCal_msboxSchema),
        async (req: Request, res: Response) => {
            const { cal_box_id } = req.params;
            const ServiceResponse = await cal_msboxService.delete(cal_box_id);
            handleServiceResponse(ServiceResponse, res);
        }
    );

    return router;
})();