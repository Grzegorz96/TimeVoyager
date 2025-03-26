import { type RequestHandler } from "express-serve-static-core";
import type { ExhibitStatsDTO, BaseResponse } from "@timevoyager/shared";
import { ExhibitLike } from "@/models";
import { handleError } from "@/utils";

export const deleteExhibitLikeController: RequestHandler<
    Pick<ExhibitStatsDTO, "exhibitId">,
    BaseResponse
> = async (req, res, next) => {
    try {
        const { deletedCount } = await ExhibitLike.deleteOne({
            authorId: req.user?._id!,
            exhibitId: req.params.exhibitId,
        });

        if (deletedCount === 0) {
            res.status(404).send({
                message: "Like not found",
                status: 404,
            });
            return;
        }
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(200).send({
        message: "Like deleted successfully",
        status: 200,
    });
};
