import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";

export const isAuthenticated: RequestHandler = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        next(
            createHttpError(
                401,
                `You need to sign in to access ${req.originalUrl} route.`
            )
        );
    }
};

export const isUnauthenticated: RequestHandler = (req, res, next) => {
    if (req.isUnauthenticated()) {
        next();
    } else {
        next(
            createHttpError(
                403,
                `You need to sign out to access ${req.originalUrl} route.`
            )
        );
    }
};
