import express, { Request, Response, } from "express";

import { handleServiceResponse, validateRequest } from "@common/utils/httpHandlers";
import { categoryService } from "@modules/categories/categoryService";
import { CreateCategorySchema, UpdateCategorySchema, GetCategorySchema, GetParamCategorySchema } from "@modules/categories/categoryModel";


export const categoryRouter = (() => {
    const router = express.Router();

    router.get("/get", async (req: Request, res: Response) => {
        const ServiceResponse = await categoryService.findAll();
        handleServiceResponse(ServiceResponse, res);
    })

    router.post("/create", validateRequest(CreateCategorySchema), async (req: Request, res: Response) => {
        const payload = req.body;
        const ServiceResponse = await categoryService.create(payload);
        handleServiceResponse(ServiceResponse, res);
    })

    router.patch("/update", validateRequest(UpdateCategorySchema), async (req: Request, res: Response) => {
        const { id } = req.body;
        const payload = req.body;
        const ServiceResponse = await categoryService.update(id, payload);
        handleServiceResponse(ServiceResponse, res);
    })

    router.delete("/delete/:id", validateRequest(GetCategorySchema), async (req: Request, res: Response) => {
        const { id } = req.params;
        const ServiceResponse = await categoryService.delete(id);
        handleServiceResponse(ServiceResponse, res);
    })

    router.get("/get/:id", validateRequest(GetParamCategorySchema), async (req: Request, res: Response) => {
        const { id } = req.params;
        const ServiceResponse = await categoryService.findById(id);
        handleServiceResponse(ServiceResponse, res);
    })

    return router;
})();
