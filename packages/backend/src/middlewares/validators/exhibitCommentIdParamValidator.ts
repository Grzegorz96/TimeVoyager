import { type RequestHandler } from "express-serve-static-core";
import { exhibitCommentSchema } from "@timevoyager/shared";
import { handleError } from "@/utils";
import { z } from "zod";

const exhibitCommentIdParamSchema = z.object({
    commentId: exhibitCommentSchema.shape._id,
});

export const exhibitCommentIdParamValidator: RequestHandler = (
    req,
    _res,
    next
) => {
    try {
        exhibitCommentIdParamSchema.parse(req.params);

        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
