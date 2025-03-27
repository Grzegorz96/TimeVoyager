import { type RequestHandler } from "express-serve-static-core";
import type { BaseResponse, ExhibitCommentDTO } from "@timevoyager/shared";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";

export const deleteExhibitCommentLikeController: RequestHandler<
    { commentId: ExhibitCommentDTO["_id"] },
    BaseResponse
> = async (req, res, next) => {
    try {
        await ExhibitComment.deleteCommentLike(
            req.params.commentId,
            req.user?._id!
        );
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(200).send({
        message: "Comment like deleted successfully",
        status: 200,
    });
};
