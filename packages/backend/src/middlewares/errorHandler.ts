import { type ErrorRequestHandler } from "express-serve-static-core";
import { isHttpError } from "http-errors";

export const errorHandler: ErrorRequestHandler<unknown, { error: object }> = (
    error: unknown,
    req,
    res,
    next
) => {
    // console.log(error);
    let statusCode = 500;
    let errorMessage = "An unknown error occurred";
    if (isHttpError(error)) {
        statusCode = error.statusCode;
        errorMessage = error.message;
    }
    res.status(statusCode).send({
        error: { message: errorMessage, code: statusCode },
    });
};
