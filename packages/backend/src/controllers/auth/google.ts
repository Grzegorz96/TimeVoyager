import { RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import passport from "passport";
import { TokenError } from "passport-oauth2";

export const googleController: RequestHandler = passport.authenticate("google");

export const googleRedirectController: RequestHandler = (req, res, next) => {
    passport.authenticate(
        "google",
        (err: unknown, user: Express.User, info: { message: string }) => {
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
                    createHttpError(401, info?.message || "Unauthorized")
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
