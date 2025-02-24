import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import passport from "passport";
import { TokenError } from "passport-oauth2";
import { redirectWithInfo } from "@/utils";
import { env } from "@/config";

export const googleController: RequestHandler = passport.authenticate("google");

export const googleRedirectController: RequestHandler = (req, res, next) => {
    passport.authenticate(
        "google",
        (
            err: unknown,
            user: Express.User | false,
            info?: Record<string, string>
        ) => {
            if (err) {
                if (err instanceof createHttpError.HttpError) {
                    return redirectWithInfo(
                        res,
                        err.message,
                        err.status,
                        "/sign-in"
                    );
                } else if (
                    err instanceof TokenError &&
                    err.code === "invalid_grant"
                ) {
                    return redirectWithInfo(
                        res,
                        "Invalid 'code' in request",
                        400,
                        "/sign-in"
                    );
                } else {
                    return redirectWithInfo(
                        res,
                        "Internal server error",
                        500,
                        "/sign-in"
                    );
                }
            }
            if (!user) {
                return redirectWithInfo(
                    res,
                    info?.message || "Authentication failed",
                    401,
                    "/sign-in"
                );
            }

            req.logIn(user, (err) => {
                if (err) {
                    return redirectWithInfo(
                        res,
                        "Internal server error",
                        500,
                        "/sign-in"
                    );
                }
                res.redirect(env.CLIENT_URL);
            });
        }
    )(req, res, next);
};
