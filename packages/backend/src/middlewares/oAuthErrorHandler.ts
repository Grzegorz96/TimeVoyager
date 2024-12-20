import { type RequestHandler } from "express-serve-static-core";
import { redirectWithError } from "@/utils";

export const oAuthErrorHandler: RequestHandler = (req, res, next) => {
    const { error } = req.query;
    if (error) return redirectWithError(res, error, 403);
    next();
};
