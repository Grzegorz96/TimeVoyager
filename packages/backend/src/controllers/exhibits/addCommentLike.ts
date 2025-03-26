import { type RequestHandler } from "express-serve-static-core";
import type { BaseResponse, ExhibitCommentDTO } from "@timevoyager/shared";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";

export const addCommentLikeController: RequestHandler<
    { commentId: ExhibitCommentDTO["_id"] },
    BaseResponse
> = async (req, res, next) => {
    try {
        // const x = await ExhibitComment.findByIdAndUpdate(req.params.commentId, {
        //     $addToSet: { likes: req.user?._id },
        // });
        await ExhibitComment.addLike(req.params.commentId, req.user?._id!);

        // const x = await ExhibitComment.findOneAndUpdate(
        //     { _id: req.params.commentId },
        //     { $addToSet: { likes: req.user?._id } },
        //     { new: true }
        // );

        // const x = await ExhibitComment.updateOne(
        //     { _id: req.params.commentId },
        //     { $addToSet: { likes: req.user?._id } }
        // );
    } catch (err: unknown) {
        console.error(err);
        return handleError(err, next);
    }

    res.status(201).send({
        message: "Comment like added successfully",
        status: 201,
    });
};
