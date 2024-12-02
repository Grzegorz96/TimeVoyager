import bcrypt from "bcrypt";
import mongoose from "mongoose";
import createHttpError from "http-errors";
import { ZodError } from "zod";
import { disconnectFromDBs } from "@/databases/connection";
import { ChildProcess } from "child_process";

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

export const handleGracefulShutdown = async (
    workerProcess: ChildProcess | null
) => {
    try {
        await disconnectFromDBs();
        console.log("Disconnected from MongoDB and Redis server");

        if (workerProcess) {
            workerProcess.send("shutdown");
        }
    } catch (err) {
        console.error("Error during shutdown:", err);
    } finally {
        // process.exit(0);
    }
};
