import { type RequestHandler } from "express-serve-static-core";
import { exhibitCommentSchema } from "@timevoyager/shared";
import { handleError } from "@/utils";

const exhibitIdParamSchema = exhibitCommentSchema.shape.exhibitId;

export const exhibitIdParamValidator: RequestHandler = (req, _res, next) => {
    const { exhibitId } = req.params;

    try {
        exhibitIdParamSchema.parse(exhibitId);

        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
