import { ResponseStatus,ServiceResponse } from "@common/models/serviceResponse";
import { env } from "@common/utils/httpHandlers";
import { handleServiceResponse } from "@common/utils/httpHandlers";
import { NextFunction,Request,Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import { userRepository } from "@modules/user/userRepository";

declare global {
    namespace Express {
        interface Request {
            token? : any;
        }
    }
}

function authToken (
    req: Request,
    res: Response,
    next: NextFunction
): void {
    {
        const token = req.cookies.token;
        let jwtPayload;
        if (!token){
            handleServiceResponse(
                new ServiceResponse(
                    ResponseStatus.Failed,
                    "Authentication failed",
                    null,
                    StatusCodes.UNAUTHORIZED
                ),
                res
            );
            return;
        }
        try {
            jwtPayload = (<any>verify(token, env.JWT_SECRET,{
                complete: true,
                algorithms: ["HS256"],
                clockTolerance: 0,
                ignoreExpiration: false,
                ignoreNotBefore: false,
            })) as any;
            const uuid = jwtPayload.payload.uuid;
            const user = await userRepository.findByIdAsync(uuid);
            if (!user) {
                handleServiceResponse(
                    new ServiceResponse(
                        ResponseStatus.Failed,
                        "user",
                        null,
                        StatusCodes.FORBIDDEN
                    ),
                    res
                );
                return;
            }
            jwtPayload.payload.users_id = user.users_id;
            jwtPayload.payload.role = user.status_role;
            req.token = jwtPayload;
        } catch (error) {
            handleServiceResponse(
                new ServiceResponse(
                    ResponseStatus.Failed,
                    "Invaild token",
                    null,
                    StatusCodes.UNAUTHORIZED
                ),
                res
            );
        }

}}