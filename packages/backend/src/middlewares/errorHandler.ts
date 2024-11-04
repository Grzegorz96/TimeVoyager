import {
    ErrorRequestHandler,
    type Request,
    type Response,
    type NextFunction,
} from "express-serve-static-core";
import { isHttpError } from "http-errors";

export const errorHandler: ErrorRequestHandler = (
    error: unknown,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    console.log(error);
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
