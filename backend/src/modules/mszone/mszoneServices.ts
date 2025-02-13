import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { mszoneRepository } from "@modules/mszone/mszoneRepository";
import { TypePayloadmszone } from "@modules/mszone/mszoneModel";
import { mszone } from "@prisma/client";

export const mszoneService = {
  findAll: async () => {
    const mszone = await mszoneRepository.findAllAsync();
    return new ServiceResponse(
      ResponseStatus.Success,
      "Get All success",
      mszone,
      StatusCodes.OK
    );
  },

  create: async (payload: TypePayloadmszone) => {
    try {
      const checkMszone = await mszoneRepository.findByName(payload.mszone_name);
      if (checkMszone) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          "Mszone already taken",
          null,
          StatusCodes.BAD_REQUEST
        );
      }
      const mszone = await mszoneRepository.create(payload);
      return new ServiceResponse<mszone>(
        ResponseStatus.Success,
        "Create Mszone success",
        mszone,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error create mszone :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  update: async (mszone_id: string, payload: Partial<TypePayloadmszone>) => {
    try {
      const mszone = await mszoneRepository.update(mszone_id, payload);
      return new ServiceResponse<mszone>(
        ResponseStatus.Success,
        "Update mszone success",
        mszone,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error update mszone :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  delete: async (mszone_id: string) => {
    try {
      await mszoneRepository.delete(mszone_id);
      return new ServiceResponse(
        ResponseStatus.Success,
        "Delete Mszone success",
        null,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error Delete Mszone :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },
};
