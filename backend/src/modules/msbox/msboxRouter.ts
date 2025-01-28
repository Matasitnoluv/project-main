import express, { Request, Response } from "express";
import { handleServiceResponse, validateRequest, } from "@common/utils/httpHandlers";
import { msboxService } from "@modules/msbox/msboxServices";
import { CreateMsboxSchema, DeleteMsboxSchema, UpdateMsboxSchema, } from "@modules/msbox/msboxModel";

export const msboxRouter = (() => {
  const router = express.Router();
  router.get("/get", async (req: Request, res: Response) => {
    const ServiceResponse = await msboxService.findAll();
    handleServiceResponse(ServiceResponse, res);
  });

  router.post("/create", validateRequest(CreateMsboxSchema),
    async (req: Request, res: Response) => {
      const payload = req.body;
      const ServiceResponse = await msboxService.create(payload);
      handleServiceResponse(ServiceResponse, res);
      //   console.log(payload);
    }
  );

  router.patch("/update", validateRequest(UpdateMsboxSchema),
    async (req: Request, res: Response) => {
      const { master_box_id } = req.body;
      const payload = req.body;
      const ServiceResponse = await msboxService.update(master_box_id, payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.delete("/delete/:master_box_id", validateRequest(DeleteMsboxSchema),
    async (req: Request, res: Response) => {
      const { master_box_id } = req.params;
      const ServiceResponse = await msboxService.delete(master_box_id);
      handleServiceResponse(ServiceResponse, res);
    }
  );


  return router;
})();
