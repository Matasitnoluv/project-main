import { ServiceResponse } from '@common/models/serviceResponse';
import express, { Request, Response } from "express";
import { handleServiceResponse, validateRequest, } from "@common/utils/httpHandlers";
import { userService } from "@modules/user/userServices";
import { CreateuserSchema, DeleteuserSchema, UpdateuserSchema, } from "@modules/user/userModel";

export const userRouter = (() => {
  const router = express.Router();
  router.get("/get", async (req: Request, res: Response) => {
    const ServiceResponse = await userService.findAll();
    handleServiceResponse(ServiceResponse, res);
  });

  router.post("/create", validateRequest(CreateuserSchema),
    async (req: Request, res: Response) => {
      const payload = req.body;
      const ServiceResponse = await userService.create(payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.put("/update", validateRequest(UpdateuserSchema),
    async (req: Request, res: Response) => {
      const { users_id } = req.body;
      const payload = req.body;
      const ServiceResponse = await userService.update(users_id, payload);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  router.delete("/delete/:users_id", validateRequest(DeleteuserSchema),
    async (req: Request, res: Response) => {
      const { users_id } = req.params;
      const ServiceResponse = await userService.delete(users_id);
      handleServiceResponse(ServiceResponse, res);
    }
  );

  return router;
})();
