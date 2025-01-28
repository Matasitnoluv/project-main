import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { categoryRepository } from "@modules/categories/categoryRepository";
import { TypePayloadCategory } from "@modules/categories/categoryModel";

import { categories } from "@prisma/client";

export const categoryService = {
    findAll: async () => {
        const categories = await categoryRepository.findAllAsync();
        return new ServiceResponse(
            ResponseStatus.Success,
            "Get all success",
            categories,
            StatusCodes.OK
        )
    },

    create: async (payload: TypePayloadCategory) => {
        try {
            const checkCategory = await categoryRepository.findByName(payload.category_name);
            if(checkCategory){
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Category already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                )
            }
            const category = await categoryRepository.create(payload);
            return new ServiceResponse<categories>(
                ResponseStatus.Success,
                "Create category success",
                category,
                StatusCodes.OK
            )
        } catch (ex) {
            const errorMessage = "Error create category :" + (ex as Error).message;
            return new ServiceResponse(
              ResponseStatus.Failed,
              errorMessage,
              null,
              StatusCodes.INTERNAL_SERVER_ERROR
            );  
        }
    },

    update: async(id: string, payload: TypePayloadCategory) => {
        try {
            const checkCategoryId = categoryRepository.findByIdAsync(id);
            if(!checkCategoryId){
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Category not found",
                    null,
                    StatusCodes.BAD_REQUEST
                )
            }
            const checkCategory = await categoryRepository.findByName(payload.category_name);
            if(checkCategory){
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Category already taken",
                    null,
                    StatusCodes.BAD_REQUEST
                )
            }
            const category = await categoryRepository.update(id, payload);
            return new ServiceResponse<categories>(
                ResponseStatus.Success,
                "Category found",
                category,
                StatusCodes.OK
            )
        } catch (ex) {
            const errorMessage = "Error update category :" + (ex as Error).message;
            return new ServiceResponse(
              ResponseStatus.Failed,
              errorMessage,
              null,
              StatusCodes.INTERNAL_SERVER_ERROR
            );  
        }
    },

    delete: async(id: string) => {
        try {
            const checkCategory = await categoryRepository.findByIdAsync(id);
            if(!checkCategory){
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Category not found",
                    null,
                    StatusCodes.BAD_REQUEST
                )  
            }
            await categoryRepository.delete(id);
            return new ServiceResponse<string>(
                ResponseStatus.Success,
                "Category found",
                "Delete category success",
                StatusCodes.OK
            )
        } catch (ex) {
            const errorMessage = "Error delete category :" + (ex as Error).message;
            return new ServiceResponse(
              ResponseStatus.Failed,
              errorMessage,
              null,
              StatusCodes.INTERNAL_SERVER_ERROR
            );  
        }
    },

    findById: async(id: string) => {
        try {
            const Category = await categoryRepository.findByIdAsync(id);
            if(!Category){
                return new ServiceResponse(
                    ResponseStatus.Failed,
                    "Category not found",
                    null,
                    StatusCodes.BAD_REQUEST
                )  
            }
            return new ServiceResponse<categories>(
                ResponseStatus.Success,
                "Category found",
                Category,
                StatusCodes.OK
            )
        } catch (ex) {
            const errorMessage = "Error Get category :" + (ex as Error).message;
            return new ServiceResponse(
              ResponseStatus.Failed,
              errorMessage,
              null,
              StatusCodes.INTERNAL_SERVER_ERROR
            );  
        }
    }
}

