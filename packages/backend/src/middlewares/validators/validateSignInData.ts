import {
    localCredentialsSchema,
    type LocalCredentialsDTO,
} from "@timevoyager/shared";
import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { ZodError } from "zod";

export const validateSignInData: RequestHandler = (req, res, next) => {
    try {
        const validatedSignInData: LocalCredentialsDTO =
            localCredentialsSchema.parse(req.body);
        req.body = validatedSignInData;
        next();
    } catch (err: unknown) {
        if (err instanceof ZodError) {
            const errorText = `field ${err.errors[0]?.path[0]}: ${err.errors[0]?.message}`;
            next(createHttpError(401, errorText));
        } else {
            next(err);
        }
    }
};
