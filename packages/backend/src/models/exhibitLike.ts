import {
    Schema,
    Types,
    model,
    type InferSchemaType,
    type Model,
} from "mongoose";
import { exhibitIdRegEx, type ExhibitStatsDTO } from "@timevoyager/shared";

const ExhibitLikeSchema = new Schema(
    {
        exhibitId: {
            type: String,
            required: true,
            index: true,
            match: [
                exhibitIdRegEx,
                "Exhibit ID must be a 10-digit number between 1000000000 and 9999999999",
            ],
        },
        authorId: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
        },
    },
    {
        timestamps: {
            createdAt: true,
            updatedAt: false,
        },
    }
);

ExhibitLikeSchema.index({ exhibitId: 1, authorId: 1 }, { unique: true });

ExhibitLikeSchema.statics.findLikesStatisticsForExhibits = function (
    exhibitIds: ExhibitStatsDTO["exhibitId"][],
    userId?: Express.User["_id"]
): Promise<Omit<ExhibitStatsDTO, "commentsCount">[]> {
    return this.aggregate([
        { $match: { exhibitId: { $in: exhibitIds } } },
        {
            $group: {
                _id: "$exhibitId",
                likesCount: { $sum: 1 },
                ...(userId
                    ? {
                          isLikedByUser: {
                              $max: {
                                  $eq: ["$authorId", userId],
                              },
                          },
                      }
                    : {}),
            },
        },
        {
            $project: {
                _id: 0,
                exhibitId: "$_id",
                likesCount: 1,
                ...(userId ? { isLikedByUser: 1 } : {}),
            },
        },
    ]);
};

type ExhibitLikeType = InferSchemaType<typeof ExhibitLikeSchema>;

interface ExhibitLikeModel extends Model<ExhibitLikeType> {
    findLikesStatisticsForExhibits(
        exhibitIds: ExhibitStatsDTO["exhibitId"][],
        userId?: Express.User["_id"]
    ): Promise<Omit<ExhibitStatsDTO, "commentsCount">[]>;
}

export const ExhibitLike = model<ExhibitLikeType, ExhibitLikeModel>(
    "ExhibitLike",
    ExhibitLikeSchema
);
