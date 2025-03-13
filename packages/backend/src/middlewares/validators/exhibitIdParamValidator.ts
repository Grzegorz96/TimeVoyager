import { type RequestHandler } from "express-serve-static-core";
import { exhibitCommentSchema } from "@timevoyager/shared";
import { handleError } from "@/utils";

const exhibitIdParamSchema = exhibitCommentSchema.pick({ exhibitId: true });

export const exhibitIdParamValidator: RequestHandler = (req, _res, next) => {
    try {
        exhibitIdParamSchema.parse(req.params);

        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
