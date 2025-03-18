import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { authConfig, HTTPMethod } from "@/config";

export const authHandler: RequestHandler = (req, _res, next) => {
    const { path, method } = req;

    for (const [regex, { allowedMethods, isPrivateRoute }] of authConfig) {
        if (regex.test(path) && allowedMethods.includes(method as HTTPMethod)) {
            if (isPrivateRoute && req.isUnauthenticated()) {
                return next(
                    createHttpError(
                        401,
                        `You need to sign in to access ${path} route.`
                    )
                );
            }

            if (!isPrivateRoute && req.isAuthenticated()) {
                return next(
                    createHttpError(
                        403,
                        `You need to sign out to access ${path} route.`
                    )
                );
            }

            return next();
        }
    }

    next();
};
