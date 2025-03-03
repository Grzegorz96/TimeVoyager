import { type RequestHandler } from "express-serve-static-core";
import { ExhibitComment, ExhibitLike } from "@/models";
import { handleError } from "@/utils";
import type {
    ExhibitsStatsResponse,
    ExhibitCommentDTO,
} from "@timevoyager/shared";

export const getExhibitsStatsController: RequestHandler<
    { exhibitIds: string },
    ExhibitsStatsResponse,
    ExhibitCommentDTO["exhibitId"][]
> = async (req, res, next) => {
    try {
        const exhibitIds = req.body;

        const commentStats =
            await ExhibitComment.findCommentStatisticsForExhibits(exhibitIds);

        const likeStats = await ExhibitLike.findLikeStatisticsForExhibits(
            exhibitIds
        );

        const stats = exhibitIds.map((exhibitId) => {
            const likeStat = likeStats.find((stat) => stat._id === exhibitId);
            const commentStat = commentStats.find(
                (stat) => stat._id === exhibitId
            );

            return {
                exhibitId,
                likeCount: likeStat ? likeStat.likeCount : 0,
                commentCount: commentStat ? commentStat.commentCount : 0,
            };
        });

        res.status(200).send({
            message: "Exhibits stats retrieved successfully",
            status: 200,
            data: stats,
        });
    } catch (err: unknown) {
        return handleError(err, next);
    }
};
