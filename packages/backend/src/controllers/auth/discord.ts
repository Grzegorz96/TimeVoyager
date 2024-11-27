import { RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import passport from "passport";
import { TokenError } from "passport-oauth2";

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
                if (err instanceof TokenError && err.code === "invalid_grant") {
                    return next(
                        createHttpError(500, "Invalid 'code' in request.")
                    );
                }
                return next(err);
            }
            if (!user) {
                return next(
                    createHttpError(
                        401,
                        info?.message || "Authentication failed"
                    )
                );
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                res.status(200).send({
                    message: "User signed in successfully",
                });
            });
        }
    )(req, res, next);
};
