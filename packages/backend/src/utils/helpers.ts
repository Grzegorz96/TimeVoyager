import bcrypt from "bcrypt";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import { ZodError } from "zod";
import { type Response } from "express";
import { env } from "@/config";
import QueryString from "qs";

const saltRounds = 10;

export const hashPassword = async (password: string) => {
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
};

export const comparePasswords = (password: string, hash: string) =>
    bcrypt.compare(password, hash);

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

export const redirectWithInfo = (
    res: Response,
    message: string | QueryString.ParsedQs | (string | QueryString.ParsedQs)[],
    status: number,
    route: string = "/"
) => {
    var serializedMessage: string;

    if (typeof message === "string") {
        serializedMessage = message;
    } else if (Array.isArray(message)) {
        serializedMessage = message.join(", ");
    } else if (typeof message === "object" && message !== null) {
        serializedMessage = JSON.stringify(message);
    } else {
        serializedMessage = "An unknown error occurred";
    }

    const urlParams = new URLSearchParams();
    urlParams.append("message", serializedMessage);
    urlParams.append("status", status.toString());
    const redirectUrl = `${env.CLIENT_URL}${route}?${urlParams.toString()}`;

    return res.redirect(redirectUrl);
};
