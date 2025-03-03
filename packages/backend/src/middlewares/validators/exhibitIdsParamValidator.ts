import { type RequestHandler } from "express-serve-static-core";
import { exhibitCommentSchema } from "@timevoyager/shared";
import { handleError } from "@/utils";
import { z } from "zod";

const exhibitIdsParamSchema = z.array(exhibitCommentSchema.shape.exhibitId);

export const exhibitIdsParamValidator: RequestHandler = (req, _res, next) => {
    const { exhibitIds } = req.params;

    try {
        const validatedParamsArray = exhibitIdsParamSchema.parse(
            exhibitIds!.split(",")
        );

        req.body = validatedParamsArray;
        next();
    } catch (err: unknown) {
        handleError(err, next);
    }
};
