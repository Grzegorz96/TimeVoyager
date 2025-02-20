import { type RequestHandler } from "express-serve-static-core";
import type { NewExhibitCommentDTO, BaseResponse } from "@timevoyager/shared";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";

export const addExhibitCommentController: RequestHandler<
    { exhibitId: string },
    BaseResponse,
    NewExhibitCommentDTO
> = async (req, res, next) => {
    try {
        await ExhibitComment.create(req.body);
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(201).send({
        message: "Comment added successfully",
        status: 201,
    });
};
