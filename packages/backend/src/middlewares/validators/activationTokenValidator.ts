import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";
import { activationTokenRegEx } from "@/utils";

export const activationTokenValidator: RequestHandler = (req, res, next) => {
    const { activationToken } = req.params;

    if (!activationTokenRegEx.test(activationToken)) {
        return next(createHttpError(400, "Invalid activation token format"));
    }

    next();
};
