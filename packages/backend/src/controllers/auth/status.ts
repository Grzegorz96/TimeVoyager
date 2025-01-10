import { RequestHandler } from "express-serve-static-core";
import { AuthSuccessResponse } from "@timevoyager/shared";
import createHttpError from "http-errors";

export const statusController: RequestHandler<unknown, AuthSuccessResponse> = (
    req,
    res,
    next
) => {
    if (!req.user)
        return next(createHttpError(401, "User is not authenticated"));

    res.setHeader("Cache-Control", "no-store");
    res.status(200).send({
        message: "User is authenticated",
        status: 200,
        user: {
            email: req.user.email,
            username: req.user.username,
        },
    });
};
