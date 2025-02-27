import { type RequestHandler } from "express-serve-static-core";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";
import type { ExhibitCommentsResponse } from "@timevoyager/shared";

export const getExhibitCommentsController: RequestHandler<
    { exhibitId: string },
    ExhibitCommentsResponse
> = async (req, res, next) => {
    try {
        const exhibitComments = await ExhibitComment.findCommentsByExhibitId(
            req.params.exhibitId
        );

        res.status(200).send({
            message: "Exhibit comments retrieved successfully",
            status: 200,
            data: exhibitComments,
        });
    } catch (err: unknown) {
        return handleError(err, next);
    }
};
