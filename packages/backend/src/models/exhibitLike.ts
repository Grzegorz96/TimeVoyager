import {
    Schema,
    Types,
    model,
    type InferSchemaType,
    type Model,
} from "mongoose";
import { exhibitIdRegEx, type ExhibitCommentDTO } from "@timevoyager/shared";

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
        userId: {
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

ExhibitLikeSchema.statics.findLikeStatisticsForExhibits = async function (
    exhibitIds: ExhibitCommentDTO["exhibitId"][]
): Promise<{ _id: ExhibitCommentDTO["exhibitId"]; likeCount: number }[]> {
    return this.aggregate([
        { $match: { exhibitId: { $in: exhibitIds } } }, // Filtrujemy po liście exhibitId
        {
            $group: {
                _id: "$exhibitId", // Grupujemy po exhibitId
                likeCount: { $sum: 1 }, // Zliczamy liczbę polubień dla każdego exhibitId
            },
        },
    ]);
};

type ExhibitLikeType = InferSchemaType<typeof ExhibitLikeSchema>;

interface ExhibitLikeModel extends Model<ExhibitLikeType> {
    findLikeStatisticsForExhibits(
        exhibitIds: ExhibitCommentDTO["exhibitId"][]
    ): Promise<{ _id: ExhibitCommentDTO["exhibitId"]; likeCount: number }[]>;
}

export const ExhibitLike = model<ExhibitLikeType, ExhibitLikeModel>(
    "ExhibitLike",
    ExhibitLikeSchema
);
