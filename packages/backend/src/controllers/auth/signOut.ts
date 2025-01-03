import { type BaseResponse } from "@timevoyager/shared";
import { type RequestHandler } from "express-serve-static-core";

export const signOutController: RequestHandler<unknown, BaseResponse> = (
    req,
    res,
    next
) => {
    req.logOut((err: unknown) => {
        if (err) {
            return next(err);
        }
        res.status(200).send({
            message: "User signed out successfully",
            status: 200,
        });
    });
};
