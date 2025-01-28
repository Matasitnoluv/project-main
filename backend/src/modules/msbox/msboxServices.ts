import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { msboxRepository } from "@modules/msbox/msboxRepository";
import { TypePayloadmasterbox } from "@modules/msbox/msboxModel";
import { masterbox } from "@prisma/client";

export const msboxService = {
  findAll: async () => {
    const masterbox = await msboxRepository.findAllAsync();
    return new ServiceResponse(
      ResponseStatus.Success,
      "Get All success",
      masterbox,
      StatusCodes.OK
    );
  },
  create: async (payload: TypePayloadmasterbox) => {
    try {
      const checkMasterbox = await msboxRepository.findByName(payload.master_box_name);
      if (checkMasterbox) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          "Masterbox already taken",
          null,
          StatusCodes.BAD_REQUEST
        );
      }
      const masterbox = await msboxRepository.create(payload);
      return new ServiceResponse<masterbox>(
        ResponseStatus.Success,
        "Create Masterbox success",
        masterbox,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error create masterbox :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  update: async (master_box_id: string, payload: Partial<TypePayloadmasterbox>) => {
    try {
      const masterbox = await msboxRepository.update(master_box_id, payload);
      return new ServiceResponse<masterbox>(
        ResponseStatus.Success,
        "Update masterbox success",
        masterbox,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error update masterbox :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  delete: async (master_box_id: string) => {
    try {
      await msboxRepository.delete(master_box_id);
      return new ServiceResponse(
        ResponseStatus.Success,
        "Delete Box success",
        null,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error Delete Box :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },
};
