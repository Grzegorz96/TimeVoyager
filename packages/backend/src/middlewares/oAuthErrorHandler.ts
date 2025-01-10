import { type RequestHandler } from "express-serve-static-core";
import { redirectWithInfo } from "@/utils";

export const oAuthErrorHandler: RequestHandler = (req, res, next) => {
    const { error } = req.query;
    if (error) return redirectWithInfo(res, error, 403, "/sign-in");
    next();
};
