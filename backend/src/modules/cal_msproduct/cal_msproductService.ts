import { cal_msproductRepository } from '@modules/cal_msproduct/cal_msproductRepository';
import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { TypePayloadcal_msproduct } from "@modules/cal_msproduct/cal_msproductModel";
import { cal_msproduct } from "@prisma/client";
import { msproductRepository } from '@modules/msproduct/msproductRepository';

export const cal_msproductService = {
    findAll: async () => {
        const cal_msproduct = await cal_msproductRepository.findAllAsync();
        return new ServiceResponse(
            ResponseStatus.Success,
            "Get All success",
            cal_msproduct,
            StatusCodes.OK
        );
    },
    create: async (payload: TypePayloadcal_msproduct) => {
        try {
            const checkCal_msproduct = await cal_msproductRepository.findByName(payload.cal_product_name);
            if (checkCal_msproduct) {
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Masterproduct already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                );
            }
            const cal_msproduct = await cal_msproductRepository.create(payload);
            return new ServiceResponse<cal_msproduct>(
                ResponseStatus.Success,
                "Create cal_msproduct success",
                cal_msproduct,
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

    update: async (cal_product_id: string, payload: Partial<TypePayloadcal_msproduct>) => {
        try {
            const masterproduct = await cal_msproductRepository.update(cal_product_id, payload);
            return new ServiceResponse<cal_msproduct>(
                ResponseStatus.Success,
                "Update product success",
                masterproduct,
                StatusCodes.OK
            );
        } catch (ex) {
            const errorMessage = "Error update product :" + (ex as Error).message;
            return new ServiceResponse(
                ResponseStatus.Failed,
                errorMessage,
                null,
                StatusCodes.INTERNAL_SERVER_ERROR
            );
        }
    },

    delete: async (cal_product_id: string) => {
        try {
            await cal_msproductRepository.delete(cal_product_id);
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
