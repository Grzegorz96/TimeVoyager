import { type RequestHandler } from "express-serve-static-core";
import type {
    ExhibitCommentDTO,
    AddExhibitCommentResponse,
} from "@timevoyager/shared";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";

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
