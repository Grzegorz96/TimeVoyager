import { type RequestHandler } from "express";
import passport from "passport";
import createHttpError from "http-errors";
import { type LocalUserDTO } from "@timevoyager/shared";
import { hashPassword, handleError } from "@/utils";
import { LocalUser } from "@/models";
import { v4 as uuidv4 } from "uuid";
import {
    addActivationEmailToQueue,
    addReminderEmailToQueue,
    removeReminderEmailFromQueue,
} from "@/jobs/queues";
import { env } from "@/utils/constants";
import type { BaseResponse, AuthSuccessResponse } from "@timevoyager/shared";
import { redirectWithInfo } from "@/utils";

export const signUpController: RequestHandler<
    unknown,
    BaseResponse,
    LocalUserDTO
> = async (req, res, next) => {
    const newUserData = req.body;
    const session = await LocalUser.startSession();
    session.startTransaction();

    try {
        newUserData.password = await hashPassword(newUserData.password);
        let activationToken = uuidv4();
        while (await LocalUser.exists({ activationToken }).session(session)) {
            activationToken = uuidv4();
        }

        const newUser = new LocalUser({
            ...newUserData,
            activationToken,
            expireAt: new Date(Date.now() + env.EXPIRATION_ACCOUNT_TIME), // 60 minutes
            status: "pending",
        });

        await newUser.save({ session });
        await Promise.all([
            addActivationEmailToQueue(newUser.email, activationToken),
            addReminderEmailToQueue(newUser.email, activationToken),
        ]);

        await session.commitTransaction();

        res.status(201).send({
            message:
                "User created successfully. Check your email for account activation.",
            status: 201,
        });
    } catch (err: unknown) {
        await session.abortTransaction();
        handleError(err, next);
    } finally {
        await session.endSession();
    }
};

export const activateAccountController: RequestHandler<
    {
        activationToken: string;
    },
    BaseResponse
> = async (req, res, _next) => {
    const { activationToken } = req.params;
    const session = await LocalUser.startSession();
    session.startTransaction();

    try {
        const userToActivate = await LocalUser.findOne({
            activationToken,
        }).session(session);

        if (!userToActivate) {
            await session.abortTransaction();
            return redirectWithInfo(
                res,
                "Activation token not found or expired.",
                404
            );
        }

        userToActivate.status = "active";
        userToActivate.activationToken = undefined;
        userToActivate.expireAt = undefined;

        await userToActivate.save({ session });
        await removeReminderEmailFromQueue(activationToken);
        await session.commitTransaction();

        redirectWithInfo(res, "Account activated successfully.", 200);
    } catch (err: unknown) {
        await session.abortTransaction();
        redirectWithInfo(res, "Internal server error", 500);
    } finally {
        await session.endSession();
    }
};

export const signInController: RequestHandler<unknown, AuthSuccessResponse> = (
    req,
    res,
    next
) => {
    passport.authenticate(
        "local",
        (
            err: unknown,
            user: Express.User | false,
            info?: Record<string, string>
        ) => {
            if (err) {
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

            req.logIn(user, (err: unknown) => {
                if (err) {
                    return next(err);
                }

                res.status(200).send({
                    message: "User signed in successfully",
                    status: 200,
                    user: {
                        username: user.username,
                        email: user.email,
                    },
                });
            });
        }
    )(req, res, next);
};
