import { type RequestHandler } from "express-serve-static-core";
import {
    newExhibitCommentSchema,
    type NewExhibitCommentDTO,
} from "@timevoyager/shared";
import { handleError } from "@/utils";

export const exhibitCommentDataValidator: RequestHandler = (
    req,
    _res,
    next
) => {
    try {
        const validatedData: NewExhibitCommentDTO =
            newExhibitCommentSchema.parse({
                ...req.body,
                userId: req.user?.id,
                exhibitId: req.params.exhibitId,
            });

        req.body = validatedData;

        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
