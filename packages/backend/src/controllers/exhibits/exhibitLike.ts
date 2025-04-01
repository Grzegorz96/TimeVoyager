import { type RequestHandler } from "express-serve-static-core";
import type { ExhibitStatsDTO, BaseResponse } from "@timevoyager/shared";
import { ExhibitLike } from "@/models";
import { handleError } from "@/utils";
import createHttpError from "http-errors";

export const addExhibitLikeController: RequestHandler<
    Pick<ExhibitStatsDTO, "exhibitId">,
    BaseResponse
> = async (req, res, next) => {
    try {
        await ExhibitLike.create({
            authorId: req.user?._id!,
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
            return next(createHttpError(404, "Like not found"));
        }
    } catch (err: unknown) {
        return handleError(err, next);
    }

    res.status(200).send({
        message: "Like deleted successfully",
        status: 200,
    });
};
