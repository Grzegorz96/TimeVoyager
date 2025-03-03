import { type RequestHandler } from "express-serve-static-core";
import type {
    NewExhibitCommentDTO,
    AddExhibitCommentResponse,
} from "@timevoyager/shared";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";

export const addExhibitCommentController: RequestHandler<
    Pick<NewExhibitCommentDTO, "exhibitId">,
    AddExhibitCommentResponse,
    NewExhibitCommentDTO
> = async (req, res, next) => {
    try {
        const newComment = await ExhibitComment.createAndPopulate(req.body);

        res.status(201).send({
            message: "Comment added successfully",
            status: 201,
            data: newComment,
        });
    } catch (err: unknown) {
        return handleError(err, next);
    }
};
