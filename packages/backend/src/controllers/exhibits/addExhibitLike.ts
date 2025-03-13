import { type RequestHandler } from "express-serve-static-core";
import type { ExhibitStatsDTO, BaseResponse } from "@timevoyager/shared";
import { ExhibitLike } from "@/models";
import { handleError } from "@/utils";

export const addExhibitLikeController: RequestHandler<
    Pick<ExhibitStatsDTO, "exhibitId">,
    BaseResponse
> = async (req, res, next) => {
    try {
        await ExhibitLike.create({
            userId: req.user?.id,
            exhibitId: req.params.exhibitId,
        });
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(201).send({
        message: "Like added successfully",
        status: 201,
    });
};
