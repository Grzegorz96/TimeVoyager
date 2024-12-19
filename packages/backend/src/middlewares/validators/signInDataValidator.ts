import {
    localCredentialsSchema,
    type LocalCredentialsDTO,
} from "@timevoyager/shared";
import { type RequestHandler } from "express-serve-static-core";
import { handleError } from "@/utils";

export const signInDataValidator: RequestHandler = (req, _res, next) => {
    try {
        const validatedSignInData: LocalCredentialsDTO =
            localCredentialsSchema.parse(req.body);
        req.body = validatedSignInData;
        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
