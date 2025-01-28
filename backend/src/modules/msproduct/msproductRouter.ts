import express, { Request, Response } from "express";
import { msproductService } from "@modules/msproduct/msproductServices";
import { handleServiceResponse, validateRequest } from "@common/utils/httpHandlers";
import { CreatMsproductSchema, UpdateMsproductSchema, DeleteMsproductSchema } from "@modules/msproduct/msproductModel";

export const msproductRouter = (() => {
    const router = express.Router();
    router.get("/get", async (req: Request, res: Response) => {
        const ServiceResponse = await msproductService.findAll();
        handleServiceResponse(ServiceResponse, res);
    });

    router.post("/create", validateRequest(CreatMsproductSchema),
        async (req: Request, res: Response) => {
            const payload = req.body;
            const ServiceResponse = await msproductService.create(payload);
            handleServiceResponse(ServiceResponse, res);
            console.log(payload);
        }
    );

    router.patch("/update", validateRequest(UpdateMsproductSchema),
        async (req: Request, res: Response) => {
            const { master_product_id } = req.body;
            const payload = req.body;
            const ServiceResponse = await msproductService.update(master_product_id, payload);
            handleServiceResponse(ServiceResponse, res);
        }
    );

    router.delete("/delete/:master_product_id", validateRequest(DeleteMsproductSchema),
        async (req: Request, res: Response) => {
            const { master_product_id } = req.params
            const ServiceResponse = await msproductService.delete(master_product_id);
            handleServiceResponse(ServiceResponse, res)
        }
    )

    return router;
})();