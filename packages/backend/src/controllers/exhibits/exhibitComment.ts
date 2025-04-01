import { type RequestHandler } from "express-serve-static-core";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";
import type {
    ExhibitCommentsResponse,
    ExhibitCommentDTO,
    AddExhibitCommentResponse,
    BaseResponse,
} from "@timevoyager/shared";

export const getExhibitCommentsController: RequestHandler<
    Pick<ExhibitCommentDTO, "exhibitId">,
    ExhibitCommentsResponse
> = async (req, res, next) => {
    try {
        const exhibitComments = await ExhibitComment.findCommentsByExhibitId(
            req.params.exhibitId,
            req.user?._id
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

export const addExhibitCommentController: RequestHandler<
    Pick<ExhibitCommentDTO, "exhibitId">,
    AddExhibitCommentResponse,
    Pick<ExhibitCommentDTO, "text" | "exhibitId">
> = async (req, res, next) => {
    try {
        const newComment = await ExhibitComment.createAndPopulate(
            req.body,
            req.user?._id!
        );

        res.status(201).send({
            message: "Comment added successfully",
            status: 201,
            data: newComment,
        });
    } catch (err: unknown) {
        return handleError(err, next);
    }
};

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

export const addExhibitCommentLikeController: RequestHandler<
    { commentId: ExhibitCommentDTO["_id"] },
    BaseResponse
> = async (req, res, next) => {
    try {
        await ExhibitComment.addCommentLike(
            req.params.commentId,
            req.user?._id!
        );
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(201).send({
        message: "Comment like added successfully",
        status: 201,
    });
};
