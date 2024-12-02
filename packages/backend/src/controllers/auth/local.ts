import { RequestHandler } from "express";
import passport from "passport";
import createHttpError from "http-errors";
import { LocalUserDTO } from "@timevoyager/shared";
import { hashPassword, handleError } from "@/utils";
import { sendEmail } from "@/utils/emails";
import { LocalUser } from "@/models";
import { v4 as uuidv4 } from "uuid";
import { addReminderToQueue, removeReminderFromQueue } from "@/jobs/queues";
import { env } from "@/utils/constants";

export const signUpController: RequestHandler<
    unknown,
    { message: string },
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
        await sendEmail("activation", newUser.email, activationToken);
        await addReminderToQueue(newUser.email, activationToken);

        await session.commitTransaction();

        res.status(201).send({
            message:
                "User created successfully. Check your email for activation",
        });
    } catch (err: unknown) {
        await session.abortTransaction();
        handleError(err, next);
    } finally {
        await session.endSession();
    }
};

export const activateAccountController: RequestHandler<{
    activationToken: string;
}> = async (req, res, next) => {
    const { activationToken } = req.params;
    const session = await LocalUser.startSession();
    session.startTransaction();

    try {
        const userToActivate = await LocalUser.findOne({
            activationToken,
        }).session(session);

        if (!userToActivate) {
            await session.abortTransaction();
            return next(
                createHttpError(404, "Activation token not found or expired")
            );
        }

        userToActivate.status = "active";
        userToActivate.activationToken = undefined;
        userToActivate.expireAt = undefined;

        const activatedUser = await userToActivate.save({ session });
        await removeReminderFromQueue(activationToken);
        await session.commitTransaction();

        res.status(200).send({
            message: "Account activated successfully",
        });

        // req.logIn(activatedUser, async (err: unknown) => {
        //     if (err) {
        //         return next(err);
        //     }

        //     res.status(200).send({
        //         message: "Account activated successfully",
        //     });
        // });
    } catch (err: unknown) {
        await session.abortTransaction();
        handleError(err, next);
    } finally {
        await session.endSession();
    }
};

export const signInController: RequestHandler = (req, res, next) => {
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
                });
            });
        }
    )(req, res, next);
};
