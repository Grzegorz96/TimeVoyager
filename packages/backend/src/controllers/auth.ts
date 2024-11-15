import { type RequestHandler } from "express-serve-static-core";
import { LocalUserDTO } from "@timevoyager/shared";
import { hashPassword } from "@/utils";
import { LocalUser } from "@/models";
import createHttpError from "http-errors";
import { handleMongoError } from "@/utils";
import passport from "passport";
import { TokenError } from "passport-oauth2";

export const signUpController: RequestHandler<
    unknown,
    { message: string },
    LocalUserDTO
> = async (req, res, next) => {
    const newUserData = req.body;
    newUserData.password = await hashPassword(newUserData.password);

    try {
        const newUser = await LocalUser.create(newUserData);

        req.logIn(newUser, (err: unknown) => {
            if (err) {
                return next(err);
            }
            res.status(201).send({
                message: "User created successfully",
            });
        });
    } catch (err: unknown) {
        handleMongoError(err, next);
    }
};

export const signInController: RequestHandler = (req, res, next) => {
    passport.authenticate(
        "local",
        (
            err: unknown,
            user: Express.User,
            info: { message: "Wrong email or username" | "Wrong password" }
        ) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(createHttpError(401, info.message));
            }
            req.logIn(user, (err: unknown) => {
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

export const signOutController: RequestHandler = (req, res, next) => {
    req.logOut((err: unknown) => {
        if (err) {
            return next(err);
        }
        res.status(200).send({
            message: "User signed out successfully",
        });
    });
};

export const discordController: RequestHandler =
    passport.authenticate("discord");

export const discordRedirectController: RequestHandler = (req, res, next) => {
    passport.authenticate("discord", (err: unknown, user: Express.User) => {
        if (err) {
            if (err instanceof TokenError && err.code === "invalid_grant") {
                return next(createHttpError(500, "Invalid 'code' in request."));
            }

            return next(err);
        }

        req.logIn(user, (err) => {
            if (err) {
                return next(err);
            }
            res.status(200).send({
                message: "User signed in successfully",
            });
        });
    })(req, res, next);
};
