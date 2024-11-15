import { type ErrorRequestHandler } from "express-serve-static-core";
import { isHttpError } from "http-errors";

export const errorHandler: ErrorRequestHandler<unknown, { error: object }> = (
    err: unknown,
    req,
    res,
    next
) => {
    let statusCode = 500;
    let errorMessage = "An unknown error occurred";
    if (isHttpError(err)) {
        statusCode = err.statusCode;
        errorMessage = err.message;
    }
    res.status(statusCode).send({
        error: { message: errorMessage, status: statusCode },
    });
};
