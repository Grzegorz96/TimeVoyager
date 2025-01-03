import { type ErrorRequestHandler } from "express-serve-static-core";
import { isHttpError } from "http-errors";
import { type BaseResponse } from "@timevoyager/shared";

export const errorHandler: ErrorRequestHandler<unknown, BaseResponse> = (
    err: unknown,
    _req,
    res,
    _next
) => {
    let statusCode = 500;
    let errorMessage = "An unknown error occurred";
    if (isHttpError(err)) {
        statusCode = err.statusCode;
        errorMessage = err.message;
    }
    res.status(statusCode).send({
        message: errorMessage,
        status: statusCode,
    });
};
