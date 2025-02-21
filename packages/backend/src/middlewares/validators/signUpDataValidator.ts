import { type RequestHandler } from "express-serve-static-core";
import { newLocalUserSchema, type NewLocalUserDTO } from "@timevoyager/shared";
import { handleError } from "@/utils";

export const signUpDataValidator: RequestHandler = (req, _res, next) => {
    try {
        const validatedSignUpData: NewLocalUserDTO = newLocalUserSchema.parse(
            req.body
        );
        req.body = validatedSignUpData;

        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
