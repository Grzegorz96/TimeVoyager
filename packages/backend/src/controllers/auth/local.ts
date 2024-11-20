import { RequestHandler, text } from "express";
import passport from "passport";
import createHttpError from "http-errors";
import { LocalUserDTO } from "@timevoyager/shared";
import { hashPassword, generateActivationEmail, getTransporter } from "@/utils";
import { LocalUser, TmpUser } from "@/models";
import { handleError } from "@/utils";
import { v4 as uuidv4 } from "uuid";

export const signUpController: RequestHandler<
    unknown,
    { message: string },
    LocalUserDTO
> = async (req, res, next) => {
    const newUserData = req.body;

    const { username, email } = newUserData;

    try {
        const [existingUser, existingTmpUser] = await Promise.all([
            LocalUser.exists({ $or: [{ username }, { email }] }),
            TmpUser.exists({ $or: [{ username }, { email }] }),
        ]);

        if (existingUser || existingTmpUser) {
            return next(createHttpError(409, "User already exists"));
        }

        let activationToken = uuidv4();
        while (await TmpUser.exists({ activationToken })) {
            activationToken = uuidv4();
        }

        newUserData.password = await hashPassword(newUserData.password);

        await TmpUser.create({
            ...newUserData,
            activationToken,
        });

        const transporter = getTransporter();
        const mailOptions = generateActivationEmail(email, activationToken);

        await transporter.sendMail(mailOptions);

        res.status(201).send({
            message:
                "User created successfully. Check your email for activation link",
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
        const tmpUser = await TmpUser.findOne({ activationToken });

        if (!tmpUser) {
            return next(createHttpError(404, "Activation token not found"));
        }

        const activatedUser = await LocalUser.create(tmpUser.toObject());
        await tmpUser.deleteOne();

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
