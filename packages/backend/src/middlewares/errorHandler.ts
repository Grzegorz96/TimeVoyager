import { type ErrorRequestHandler } from "express-serve-static-core";
import { isHttpError } from "http-errors";

export type ResponseBody = {
    message: string;
    status: number;
};

export const errorHandler: ErrorRequestHandler<unknown, ResponseBody> = (
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
