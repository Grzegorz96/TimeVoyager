import { type RequestHandler } from "express-serve-static-core";
import { localUserSchema, type LocalUserDTO } from "@timevoyager/shared";
import { handleError } from "@/utils";

export const exhibitCommentDataValidator: RequestHandler = (
    req,
    _res,
    next
) => {
    try {
        console.log(req.body);
        console.log(req.user);
        // const validatedSignUpData: LocalUserDTO = localUserSchema.parse(
        //     req.body
        // );
        // req.body = validatedSignUpData;
        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
