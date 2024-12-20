import { type RequestHandler } from "express-serve-static-core";
import { localUserSchema, type LocalUserDTO } from "@timevoyager/shared";
import { handleError } from "@/utils";

export const signUpDataValidator: RequestHandler = (req, _res, next) => {
    try {
        const validatedSignUpData: LocalUserDTO = localUserSchema.parse(
            req.body
        );
        req.body = validatedSignUpData;
        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
