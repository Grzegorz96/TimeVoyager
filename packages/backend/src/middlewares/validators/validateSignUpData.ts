import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { localUserSchema, type LocalUserDTO } from "@timevoyager/shared";
import { ZodError } from "zod";

export const validateSignUpData: RequestHandler = (req, res, next) => {
    try {
        const validatedSignUpData: LocalUserDTO = localUserSchema.parse(
            req.body
        );
        req.body = validatedSignUpData;
        next();
    } catch (err: unknown) {
        if (err instanceof ZodError) {
            const errorText = `field ${err.errors[0]?.path[0]}: ${err.errors[0]?.message}`;
            next(createHttpError(400, errorText));
        } else {
            next(err);
        }
    }
};
