import { type RequestHandler } from "express-serve-static-core";
import { UserDTO } from "@timevoyager/shared";
import { hashPassword } from "@/utils";
import { User } from "@/models";
import createHttpError from "http-errors";
import mongoose from "mongoose";
import passport from "passport";

export const signUpController: RequestHandler<
    unknown,
    { message: string },
    UserDTO
> = async (req, res, next) => {
    const newUserData = req.body;
    newUserData.password = await hashPassword(newUserData.password);

    try {
        await User.create(newUserData);
        res.status(201).send({ message: "User created successfully" });
    } catch (error: unknown) {
        if (
            error instanceof mongoose.mongo.MongoServerError &&
            error.name === "MongoServerError" &&
            error.code === 11000
        ) {
            const errorText = `Duplicate key error: ${
                Object.keys(error.keyPattern)[0]
            } already exists`;
            return next(createHttpError(409, errorText));
        }
        next(error);
    }
};

export const signInController: RequestHandler = (req, res, next) => {
    passport.authenticate(
        "local",
        (
            err: any,
            user: Express.User,
            info: { message: createHttpError.UnknownError }
        ) => {
            console.log("jestem w authenticate");
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(createHttpError(401, info.message));
            }
            req.logIn(user, (err) => {
                if (err) {
                    return next(err);
                }
                res.send("User logged in successfully");
            });
        }
    )(req, res, next);
};
