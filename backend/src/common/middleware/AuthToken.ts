import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { env } from "@common/utils/httpHandlers";
import { handleServiceResponse } from "@common/utils/httpHandlers";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { verify } from "jsonwebtoken";
import { userRepository } from "@modules/user/userRepository";
import express from "express";
import cookieParser from "cookie-parser";

declare global {
    namespace Express {
        interface Request {
            token?: any;
        }
    }
}

function authToken(
    req: Request,
    res: Response,
    next: NextFunction
): void {
    {
        const app = express();
        app.use(cookieParser());
        async function authToken(req: Request, res: Response, next: NextFunction): Promise<void> {
            const token = req.cookies?.token;
            if (!token) {
                handleServiceResponse(
                    new ServiceResponse(
                        ResponseStatus.Failed,
                        "Authentication failed",
                        null,
                        StatusCodes.UNAUTHORIZED
                    ),
                    res
                );
                return; //  
            }

            try {
                const jwtPayload = verify(token, env.JWT_SECRET, {
                    algorithms: ["HS256"],
                    ignoreExpiration: false,
                }) as any;

                const uuid = jwtPayload.payload.uuid;
                const user = await userRepository.findByIdAsync(uuid);

                if (!user) {
                    handleServiceResponse(
                        new ServiceResponse(
                            ResponseStatus.Failed,
                            "User not found",
                            null,
                            StatusCodes.FORBIDDEN
                        ),
                        res
                    );
                    return;
                }

                req.token = {
                    ...jwtPayload.payload,
                    users_id: user.users_id,
                    role: user.status_role,
                };

                next(); // อนุญาตให้ request ไปต่อ
            } catch (error) {
                handleServiceResponse(
                    new ServiceResponse(
                        ResponseStatus.Failed,
                        "Invalid token",
                        null,
                        StatusCodes.UNAUTHORIZED
                    ),
                    res
                );
                return;
            }
        }

    }
}
// import { ResponseStatus,ServiceResponse } from "@common/models/serviceResponse";
// import { env } from "@common/utils/httpHandlers";
// import { handleServiceResponse } from "@common/utils/httpHandlers";
// import { NextFunction,Request,Response } from "express";
// import { StatusCodes } from "http-status-codes";
// import { verify } from "jsonwebtoken";
// import { userRepository } from "@modules/user/userRepository";

// declare global {
//     namespace Express {
//         interface Request {
//             token? : any;
//         }
//     }
// }

// function authToken (
//     req: Request,
//     res: Response,
//     next: NextFunction
// ): void {
//     {
//         const token = req.cookies.token;
//         let jwtPayload;
//         if (!token){
//             handleServiceResponse(
//                 new ServiceResponse(
//                     ResponseStatus.Failed,
//                     "Authentication failed",
//                     null,
//                     StatusCodes.UNAUTHORIZED
//                 ),
//                 res
//             );
//             return;
//         }
//         try {
//             jwtPayload = (<any>verify(token, env.JWT_SECRET,{
//                 complete: true,
//                 algorithms: ["HS256"],
//                 clockTolerance: 0,
//                 ignoreExpiration: false,
//                 ignoreNotBefore: false,
//             })) as any;
//             const uuid = jwtPayload.payload.uuid;
//             const user = await userRepository.findByIdAsync(uuid);
//             if (!user) {
//                 handleServiceResponse(
//                     new ServiceResponse(
//                         ResponseStatus.Failed,
//                         "user",
//                         null,
//                         StatusCodes.FORBIDDEN
//                     ),
//                     res
//                 );
//                 return;
//             }
//             jwtPayload.payload.users_id = user.users_id;
//             jwtPayload.payload.role = user.status_role;
//             req.token = jwtPayload;
//         } catch (error) {
//             handleServiceResponse(
//                 new ServiceResponse(
//                     ResponseStatus.Failed,
//                     "Invaild token",
//                     null,
//                     StatusCodes.UNAUTHORIZED
//                 ),
//                 res
//             );
//         }

// }}