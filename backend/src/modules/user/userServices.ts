import { users } from "@prisma/client";
import { StatusCodes } from "http-status-codes";
import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { userRepository } from "@modules/user/userRepository";
import { TypePayloaduser } from "@modules/user/userModel";
import bcrypt from "bcrypt";

export const userService = {
  findAll: async () => {
    const user = await userRepository.findAllAsync();
    return new ServiceResponse(
      ResponseStatus.Success,
      "Get All success",
      user,
      StatusCodes.OK
    );
  },

  create: async (payload: TypePayloaduser) => {
    try {
      const checkuser = await userRepository.findByName(payload.fullname);
      if (checkuser) {
        return new ServiceResponse(
          ResponseStatus.Failed,
          "User already taken",
          null,
          StatusCodes.BAD_REQUEST
        );
      }
      const hashedPassword = await bcrypt.hash(payload.password, 10);
      const user = await userRepository.create({
        ...payload,
        password: hashedPassword,
      });
      return new ServiceResponse<users>(
        ResponseStatus.Success,
        "Create user success",
        user,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error create user :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  update: async (users_id: string, payload: Partial<TypePayloaduser>) => {
    try {
      const users = await userRepository.update(users_id, payload);
      return new ServiceResponse<users>(
        ResponseStatus.Success,
        "Update users success",
        users,
        StatusCodes.OK
      );
    } catch (ex) {
      const errorMessage = "Error Update Users :" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        errorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }
  },

  delete: async (users_id: string) => {
    try {
      await userRepository.delete(users_id);
      return new ServiceResponse(
        ResponseStatus.Success,
        "Delete users success",
        null,
        StatusCodes.OK
      );
    } catch (ex) {
      const ErrorMessage = "Error Delete User" + (ex as Error).message;
      return new ServiceResponse(
        ResponseStatus.Failed,
        ErrorMessage,
        null,
        StatusCodes.INTERNAL_SERVER_ERROR
      )
    }
  },

};
