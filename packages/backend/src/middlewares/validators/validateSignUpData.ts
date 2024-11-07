import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { userSchema, type UserDTO } from "@timevoyager/shared";
import { ZodError } from "zod";

export const validateSignUpData: RequestHandler = (req, res, next) => {
    try {
        const validatedSignUpData: UserDTO = userSchema.parse(req.body);
        req.body = validatedSignUpData;
        next();
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            const errorText = `field ${error.errors[0]?.path[0]}: ${error.errors[0]?.message}`;
            next(createHttpError(400, errorText));
        } else {
            next(error);
        }
    }
};
