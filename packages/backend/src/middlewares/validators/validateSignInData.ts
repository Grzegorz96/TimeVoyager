import {
    creditentialsSchema,
    type CreditentialsDTO,
} from "@timevoyager/shared";
import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { ZodError } from "zod";

export const validateSignInData: RequestHandler = (req, res, next) => {
    try {
        const validatedSignInData: CreditentialsDTO = creditentialsSchema.parse(
            req.body
        );
        req.body = validatedSignInData;
        next();
    } catch (error: unknown) {
        if (error instanceof ZodError) {
            const errorText = `field ${error.errors[0]?.path[0]}: ${error.errors[0]?.message}`;
            next(createHttpError(401, errorText));
        } else {
            next(error);
        }
    }
};
