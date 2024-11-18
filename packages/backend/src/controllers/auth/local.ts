import { RequestHandler } from "express";
import passport from "passport";
import createHttpError from "http-errors";
import { LocalUserDTO } from "@timevoyager/shared";
import { hashPassword } from "@/utils";
import { LocalUser } from "@/models";
import { handleError } from "@/utils";
import { v4 as uuidv4 } from "uuid";
import nodemailer from "nodemailer";

export const emailSenderController: RequestHandler = async (req, res, next) => {
    const verificationToken = uuidv4();
    const html = `<a href="http://localhost:3000/auth/verify?verificationToken=${verificationToken}">Click here to verify your email</a>`;

    const transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: "",
            pass: "",
        },
    });

    // const mailOptions = {
    //     from: "
};

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
