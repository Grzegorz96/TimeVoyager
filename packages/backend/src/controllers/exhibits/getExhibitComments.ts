import { type RequestHandler } from "express-serve-static-core";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";
import type { ExhibitCommentsResponse } from "@timevoyager/shared";

export const getExhibitCommentsController: RequestHandler<
    { exhibitId: string },
    ExhibitCommentsResponse
> = async (req, res, next) => {
    console.log(req.params.exhibitId);
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
        console.log(err);
        return handleError(err, next);
    }
};
