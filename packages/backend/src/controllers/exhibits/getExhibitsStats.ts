import { type RequestHandler } from "express-serve-static-core";
import { ExhibitComment, ExhibitLike } from "@/models";
import { handleError } from "@/utils";
import type {
    ExhibitsStatsResponse,
    ExhibitStatsDTO,
} from "@timevoyager/shared";

export const getExhibitsStatsController: RequestHandler<
    { exhibitIds: string },
    ExhibitsStatsResponse,
    ExhibitStatsDTO["exhibitId"][]
> = async (req, res, next) => {
    try {
        const exhibitIds = req.body;
        const userId = req.user?.id;

        const [commentsStats, likesStats] = await Promise.all([
            ExhibitComment.findCommentsStatisticsForExhibits(exhibitIds),
            ExhibitLike.findLikesStatisticsForExhibits(exhibitIds, userId),
        ]);

        const commentsStatsMap = new Map(
            commentsStats.map(({ exhibitId, ...stat }) => [exhibitId, stat])
        );

        const likesStatsMap = new Map(
            likesStats.map(({ exhibitId, ...stat }) => [exhibitId, stat])
        );

        const stats = exhibitIds.map((exhibitId) => {
            const likesStat = likesStatsMap.get(exhibitId);
            const commentsStat = commentsStatsMap.get(exhibitId);

            return {
                exhibitId,
                likesCount: likesStat ? likesStat.likesCount : 0,
                commentsCount: commentsStat ? commentsStat.commentsCount : 0,
                ...(userId
                    ? {
                          isLikedByUser: likesStat?.isLikedByUser ?? false,
                      }
                    : {}),
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
