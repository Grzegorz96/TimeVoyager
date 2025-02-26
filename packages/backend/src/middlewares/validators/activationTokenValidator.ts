import { type RequestHandler } from "express-serve-static-core";
import { redirectWithInfo } from "@/utils";
import { activationTokenRegEx } from "@/utils/constants";
import { z } from "zod";

const activationTokenSchema = z.string().regex(activationTokenRegEx);

export const activationTokenValidator: RequestHandler = (req, res, next) => {
    const { activationToken } = req.params;

    try {
        activationTokenSchema.parse(activationToken);

        next();
    } catch (err: unknown) {
        redirectWithInfo(res, "Invalid activation token format.", 400);
    }
};
