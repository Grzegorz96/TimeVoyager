import { RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";

export const oAuthErrorHandler: RequestHandler = (req, res, next) => {
    const { error } = req.query;

    if (error) {
        if (error === "access_denied") {
            return next(createHttpError(403, "Access denied"));
        }

        next(createHttpError(500, error));
    } else {
        next();
    }
};
