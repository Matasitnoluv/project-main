import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { TypePayloadmasterproduct } from "@modules/msproduct/msproductModel";
import { StatusCodes } from "http-status-codes";
import { masterproduct } from "@prisma/client";
import { msproductRepository } from "@modules/msproduct/msproductRepository";

export const msproductService = {
    findAll: async () => {
        const masterproduct = await msproductRepository.findAllAsync();
        return new ServiceResponse(
            ResponseStatus.Success,
            "Get All success",
            masterproduct,
            StatusCodes.OK
        );
    },

    create: async (payload: TypePayloadmasterproduct) => {
        try {
            const checkMasterproduct = await msproductRepository.findByName(payload.master_product_name);
            if (checkMasterproduct) {
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Masterproduct already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                );
            }
            const masterproduct = await msproductRepository.create(payload);
            return new ServiceResponse<masterproduct>(
                ResponseStatus.Success,
                "Create Masterproduct success",
                masterproduct,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error create masterproduct :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    update: async (master_product_id: string, payload: Partial<TypePayloadmasterproduct>) => {
        try {
            const msproduct = await msproductRepository.update(master_product_id, payload);
            return new ServiceResponse<masterproduct>(
                ResponseStatus.Success,
                "Update product success",
                msproduct,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error Update product :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    delete: async (master_product_id: string) => {
        try {
            const msproduct = await msproductRepository.delete(master_product_id);
            return new ServiceResponse(
                ResponseStatus.Success,
                "Delete product",
                msproduct,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error product : " + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

}