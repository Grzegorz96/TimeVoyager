import { type RequestHandler } from "express-serve-static-core";
import { exhibitCommentSchema } from "@timevoyager/shared";
import { handleError } from "@/utils";

const dataValidator = exhibitCommentSchema.pick({
    text: true,
    exhibitId: true,
});

export const exhibitCommentDataValidator: RequestHandler = (
    req,
    _res,
    next
) => {
    try {
        const validatedData = dataValidator.parse({
            ...req.body,
            exhibitId: req.params.exhibitId,
        });

        req.body = validatedData;

        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
