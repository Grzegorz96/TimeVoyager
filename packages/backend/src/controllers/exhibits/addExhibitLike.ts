import { type RequestHandler } from "express-serve-static-core";
import type { NewExhibitCommentDTO, BaseResponse } from "@timevoyager/shared";
import { ExhibitLike } from "@/models";
import { handleError } from "@/utils";

export const addExhibitLikeController: RequestHandler<
    Pick<NewExhibitCommentDTO, "exhibitId">,
    BaseResponse,
    NewExhibitCommentDTO
> = async (req, res, next) => {
    try {
        const data = {
            userId: req.body.userId,
            exhibitId: req.params.exhibitId,
        };

        await ExhibitLike.create(data);
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(201).send({
        message: "Like added successfully",
        status: 201,
    });
};
