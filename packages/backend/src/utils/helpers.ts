import bcrypt from "bcrypt";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import { ZodError } from "zod";
import nodemailer from "nodemailer";
import { env } from "@/utils/constants";
import { LocalUser, TmpUser } from "@/models";

const saltRounds = 10;

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt);
};

export const comparePasswords = async (password: string, hash: string) => {
    return await bcrypt.compare(password, hash);
};

export const handleError = (
    err: unknown,
    cb: (err: unknown | createHttpError.HttpError) => void
): void => {
    if (err instanceof ZodError) {
        const errorText = err.errors
            .map((e) => `Field ${e.path[0]}: ${e.message}`)
            .join(", ");
        return cb(createHttpError(400, errorText));
    }

    if (
        err instanceof mongoose.mongo.MongoServerError &&
        err.name === "MongoServerError" &&
        err.code === 11000
    ) {
        const errorText = `Duplicate key error: ${
            Object.keys(err.keyPattern || {})[0]
        } already exists`;
        return cb(createHttpError(409, errorText));
    }

    if (err instanceof mongoose.Error.ValidationError) {
        const errorText = Object.values(err.errors)
            .map((err) => err.message)
            .join(" ");
        return cb(createHttpError(400, errorText));
    }

    return cb(err);
};

export const getTransporter = () =>
    nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
            user: env.EMAIL_SENDER_USER,
            pass: env.EMAIL_SENDER_PASSWORD,
        },
    });

export const generateActivationEmail = (
    recipientEmail: string,
    activationToken: string
) => {
    const html = `
        <html>
            <head>
                <style>
                    .button {
                        background-color: #4CAF50; 
                        border: none;
                        color: white;
                        padding: 15px 32px;
                        text-align: center;
                        text-decoration: none;
                        display: inline-block;
                        font-size: 16px;
                        margin: 4px 2px;
                        cursor: pointer;
                        border-radius: 12px; 
                        transition: background-color 0.3s;
                    }
                    .button:hover {
                        background-color: #45a049;
                    }
                </style>
            </head>
            <body>
                <h3>Welcome to TimeVoyager!</h3>
                <p>Click the button below to activate your account. Please note that this activation link will expire in 30 minutes:</p>
                <a href="http://localhost:3000/api/auth/activate/${activationToken}" class="button">
                    Activate Account
                </a>
                <p>If you did not request this, please ignore this email.</p>
            </body>
        </html>
    `;

    const text = `Click the link below to activate your account. Please note that this activation link will expire in 30 minutes:\n\nhttp://localhost:3000/api/auth/activate/${activationToken}\n\nIf you did not request this, please ignore this email.`;

    return {
        from: {
            name: "TimeVoyager",
            address: env.EMAIL_SENDER_USER,
        },
        to: recipientEmail,
        subject: "Account activation",
        text,
        html,
    };
};
