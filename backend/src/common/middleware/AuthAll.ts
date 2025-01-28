import { ResponseStatus, ServiceResponse } from "@common/models/serviceResponse";
import { handleServiceResponse } from "@common/utils/httpHandlers";
import { NextFunction, Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import { rolesData } from "@common/models/roleData";

function authAdmin(req: Request, res: Response, next: NextFunction): void {
    const role = req.token?.payload?.role;

    if (!rolesData.includes(role)){
        handleServiceResponse(
            new ServiceResponse(
                ResponseStatus.Failed,
                "Unanthorized",
                null,
                StatusCodes.FORBIDDEN
            ),
            res
        );
        return;
    }
    next();
}

export default authAdmin;