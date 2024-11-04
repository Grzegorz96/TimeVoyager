import {
    type Request,
    type Response,
    type NextFunction,
} from "express-serve-static-core";
import createHttpError from "http-errors";

export function notFoundHandler(
    req: Request,
    res: Response,
    next: NextFunction
) {
    next(createHttpError(404, "Endpoint Not found"));
}
