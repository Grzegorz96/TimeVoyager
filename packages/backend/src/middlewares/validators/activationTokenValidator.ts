import { type RequestHandler } from "express-serve-static-core";
import { redirectWithInfo } from "@/utils";
import { activationTokenRegEx } from "@/utils/constants";

export const activationTokenValidator: RequestHandler = (req, res, next) => {
    const { activationToken } = req.params;

    if (!activationTokenRegEx.test(activationToken!)) {
        return redirectWithInfo(res, "Invalid activation token format.", 400);
    }

    next();
};
