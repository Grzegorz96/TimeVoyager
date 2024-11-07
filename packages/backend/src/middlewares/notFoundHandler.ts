import { type RequestHandler } from "express-serve-static-core";
import createHttpError from "http-errors";

export const notFoundHandler: RequestHandler = (req, res, next) => {
    next(createHttpError(404, "Endpoint Not found"));
};
