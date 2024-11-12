import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";

const regexp = {
    api: "/api/?(?=/|$)",
    auth: "/auth/?(?=/|$)",
    signUp: "/sign-up/?",
    signIn: "/sign-in/?",
    signOut: "/sign-out/?",
};

const authConfigMap = new Map<RegExp, { requiresAuth: boolean }>([
    [
        new RegExp(`^${regexp.api}${regexp.auth}${regexp.signUp}$`, "i"),
        { requiresAuth: false },
    ],
    [
        new RegExp(`^${regexp.api}${regexp.auth}${regexp.signIn}$`, "i"),
        { requiresAuth: false },
    ],
    [
        new RegExp(`^${regexp.api}${regexp.auth}${regexp.signOut}$`, "i"),
        { requiresAuth: true },
    ],
]);

export const authHandler: RequestHandler = (req, res, next) => {
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
