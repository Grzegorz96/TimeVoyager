import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { endpointsRegEx } from "@/utils";

const authConfigMap = new Map<RegExp, { requiresAuth: boolean }>([
    [endpointsRegEx.signIn, { requiresAuth: false }],
    [endpointsRegEx.signOut, { requiresAuth: true }],
    [endpointsRegEx.signUp, { requiresAuth: false }],
    [endpointsRegEx.activate, { requiresAuth: false }],
    [endpointsRegEx.discord, { requiresAuth: false }],
    [endpointsRegEx.discordRedirect, { requiresAuth: false }],
    [endpointsRegEx.google, { requiresAuth: false }],
    [endpointsRegEx.googleRedirect, { requiresAuth: false }],
]);

export const authHandler: RequestHandler = (req, _res, next) => {
    const { path } = req;

    for (const [regex, { requiresAuth }] of authConfigMap) {
        if (regex.test(path)) {
            if (requiresAuth && req.isUnauthenticated()) {
                return next(
                    createHttpError(
                        401,
                        `You need to sign in to access ${path} route.`
                    )
                );
            }

            if (!requiresAuth && req.isAuthenticated()) {
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
