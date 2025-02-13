import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { TypePayloadmasterwarehouse } from "@modules/mswarehouse/mswarehouseModel";
import { StatusCodes } from "http-status-codes";
import { masterwarehouse } from "@prisma/client";
import { mswarehouseRepository } from "@modules/mswarehouse/mswarehouseRepository";

export const mswarehouseService = {
    findAll: async () => {
        const masterwarehouse = await mswarehouseRepository.findAllAsync();
        return new ServiceResponse(
            ResponseStatus.Success,
            "Get All success",
            masterwarehouse,
            StatusCodes.OK
        );
    },

    create: async (payload: TypePayloadmasterwarehouse) => {
        try {
            const checkMasterwarehouse = await mswarehouseRepository.findByName(payload.master_warehouse_name);
            if (checkMasterwarehouse) {
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Masterwarehouse already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                );
            }
            const masterwarehouse = await mswarehouseRepository.create(payload);
            return new ServiceResponse<masterwarehouse>(
                ResponseStatus.Success,
                "Create Masterwarehouse success",
                masterwarehouse,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error create masterwarehouse :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    update: async (master_warehouse_id: string, payload: Partial<TypePayloadmasterwarehouse>) => {
        try {
            const mswarehouse = await mswarehouseRepository.update(master_warehouse_id, payload);
            return new ServiceResponse<masterwarehouse>(
                ResponseStatus.Success,
                "Update warehouse success",
                mswarehouse,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error Update warehouse :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    delete: async (master_warehouse_id: string) => {
        try {
            const mswarehouse = await mswarehouseRepository.delete(master_warehouse_id);
            return new ServiceResponse(
                ResponseStatus.Success,
                "Delete warehouse",
                mswarehouse,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error warehouse : " + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },
};
