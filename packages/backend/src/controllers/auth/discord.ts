import { type RequestHandler } from "express-serve-static-core";
import passport from "passport";
import { TokenError } from "passport-oauth2";
import { env } from "@/utils/constants";
import { redirectWithError } from "@/utils";
import createHttpError from "http-errors";

export const discordController: RequestHandler =
    passport.authenticate("discord");

export const discordRedirectController: RequestHandler = (req, res, next) => {
    passport.authenticate(
        "discord",
        (
            err: unknown,
            user: Express.User | false,
            info?: Record<string, string>
        ) => {
            if (err) {
                if (err instanceof createHttpError.HttpError) {
                    return redirectWithError(res, err.message, err.status);
                } else if (
                    err instanceof TokenError &&
                    err.code === "invalid_grant"
                ) {
                    return redirectWithError(
                        res,
                        "Invalid 'code' in request",
                        400
                    );
                } else {
                    return redirectWithError(res, "Internal server error", 500);
                }
            }
            if (!user) {
                return redirectWithError(
                    res,
                    info?.message || "Authentication failed",
                    401
                );
            }

            req.logIn(user, (err) => {
                if (err) {
                    return redirectWithError(res, "Internal server error", 500);
                }
                res.redirect(env.CLIENT_URL);
            });
        }
    )(req, res, next);
};
