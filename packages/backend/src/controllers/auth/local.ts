import { RequestHandler, text } from "express";
import passport from "passport";
import createHttpError from "http-errors";
import { LocalUserDTO } from "@timevoyager/shared";
import { hashPassword, generateActivationEmail, getTransporter } from "@/utils";
import { LocalUser } from "@/models";
import { handleError } from "@/utils";
import { v4 as uuidv4 } from "uuid";

export const signUpController: RequestHandler<
    unknown,
    { message: string },
    LocalUserDTO
> = async (req, res, next) => {
    const newUserData = req.body;

    try {
        newUserData.password = await hashPassword(newUserData.password);
        let activationToken = uuidv4();
        while (await LocalUser.exists({ activationToken })) {
            activationToken = uuidv4();
        }

        await LocalUser.create({
            ...newUserData,
            activationToken,
            expireAt: new Date(Date.now() + 30 * 60 * 1000), // 30 minutes
            status: "pending",
        });

        const transporter = getTransporter();
        const mailOptions = generateActivationEmail(
            newUserData.email,
            activationToken
        );

        await transporter.sendMail(mailOptions);

        res.status(201).send({
            message:
                "User created successfully. Check your email for activation",
        });
    } catch (err: unknown) {
        handleError(err, next);
    }
};

export const activateAccountController: RequestHandler<{
    activationToken: string;
}> = async (req, res, next) => {
    const { activationToken } = req.params;

    try {
        const userToActivate = await LocalUser.findOne({ activationToken });

        if (!userToActivate) {
            return next(
                createHttpError(404, "Activation token not found or expired")
            );
        }

        userToActivate.status = "active";
        userToActivate.activationToken = undefined;
        userToActivate.expireAt = undefined;

        const activatedUser = await userToActivate.save();

        req.logIn(activatedUser, (err: unknown) => {
            if (err) {
                return next(err);
            }
            res.status(200).send({
                message: "Account activated successfully",
            });
        });
    } catch (err: unknown) {
        handleError(err, next);
    }
};

export const signInController: RequestHandler = (req, res, next) => {
    passport.authenticate(
        "local",
        (
            err: unknown,
            user: Express.User,
            info: {
                message:
                    | "Wrong email"
                    | "Account is not active"
                    | "Wrong password";
            }
        ) => {
            if (err) {
                return next(err);
            }
            if (!user) {
                return next(
                    createHttpError(401, info?.message || "Unauthorized")
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
