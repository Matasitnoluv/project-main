import express, { Request, Response } from "express";
import { handleServiceResponse, validateRequest } from "@common/utils/httpHandlers";
import { mszoneService } from "@modules/mszone/mszoneServices";
import { CreateMszoneSchema, DeleteMszoneSchema, UpdateMszoneSchema } from "@modules/mszone/mszoneModel";

export const mszoneRouter = (() => {
  const router = express.Router();
  router.get("/get", async (req: Request, res: Response) => {
    const ServiceResponse = await mszoneService.findAll();
    handleServiceResponse(ServiceResponse, res);
  });

  router.post("/create", validateRequest(CreateMszoneSchema), 
    async (req: Request, res: Response) => {
      const payload = req.body;
      const ServiceResponse = await mszoneService.create(payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.patch("/update", validateRequest(UpdateMszoneSchema), 
    async (req: Request, res: Response) => {
      const { mszone_id } = req.body;
      const payload = req.body;
      const ServiceResponse = await mszoneService.update(mszone_id, payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.delete("/delete/:mszone_id", validateRequest(DeleteMszoneSchema), 
    async (req: Request, res: Response) => {
      const { mszone_id } = req.params;
      const ServiceResponse = await mszoneService.delete(mszone_id);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  return router;
})();
