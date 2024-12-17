import { RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import passport from "passport";
import { TokenError } from "passport-oauth2";
import { redirectWithError } from "@/utils";
import { env } from "@/utils/constants";

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
                    return redirectWithError(res, err.message);
                }

                const errorMessage =
                    err instanceof TokenError && err.code === "invalid_grant"
                        ? "Invalid 'code' in request"
                        : "Internal server error";

                return redirectWithError(res, errorMessage);
            }
            if (!user) {
                return redirectWithError(
                    res,
                    info?.message || "Authentication failed"
                );
            }

            req.logIn(user, (err) => {
                if (err) {
                    return redirectWithError(res, "Internal server error");
                }
                res.redirect(env.CLIENT_URL);
            });
        }
    )(req, res, next);
};
