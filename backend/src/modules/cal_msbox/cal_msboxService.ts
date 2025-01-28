import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { cal_msboxRepository } from "@modules/cal_msbox/cal_msboxRepository";
import { TypePayloadcal_msbox } from "@modules/cal_msbox/cal_msboxModel";
import { cal_msbox } from "@prisma/client";

export const cal_msboxService = {
    findAll: async () => {
        const masterbox = await cal_msboxRepository.findAllAsync();
        return new ServiceResponse(
            ResponseStatus.Success,
            "Get All success",
            masterbox,
            StatusCodes.OK
        );
    },

    create: async (payload: TypePayloadcal_msbox) => {
        try {
            const checkcal_msbox = await cal_msboxRepository.findByName(payload.cal_box_name);
            if (checkcal_msbox) {
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Cal_MasterBox already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                );
            }
            const cal_msbox = await cal_msboxRepository.create(payload);
            return new ServiceResponse<cal_msbox>(
                ResponseStatus.Success,
                "Create Cal_MasterBox success",
                cal_msbox,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error create Cal_MasterBox :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    update: async (cal_box_id: string, payload: Partial<TypePayloadcal_msbox>) => {
        try {
            const cal_msbox = await cal_msboxRepository.update(cal_box_id, payload);
            return new ServiceResponse<cal_msbox>(
                ResponseStatus.Success,
                "Update cal_msbox success",
                cal_msbox,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error update cal_msbox :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    delete: async (cal_msbox_id: string) => {
        try {
            await cal_msboxRepository.delete(cal_msbox_id);
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
}