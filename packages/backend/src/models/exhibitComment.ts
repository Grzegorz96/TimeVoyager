import {
    Schema,
    Types,
    model,
    type InferSchemaType,
    type Model,
} from "mongoose";
import { exhibitIdRegEx } from "@timevoyager/shared";

const ExhibitCommentSchema = new Schema(
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
        text: {
            type: String,
            trim: true,
            required: true,
            minLength: [2, "Content must be at least 2 characters long"],
            maxLength: [501, "Content must be at most 501 characters long"],
        },
    },
    {
        timestamps: true,
    }
);

ExhibitCommentSchema.statics.findCommentStatisticsForExhibits = async function (
    exhibitIds: string[]
) {
    return this.aggregate([
        { $match: { exhibitId: { $in: exhibitIds } } }, // Filtrujemy po liście exhibitId
        {
            $group: {
                _id: "$exhibitId", // Grupujemy po exhibitId
                commentCount: { $sum: 1 }, // Zliczamy liczbę komentarzy dla każdego exhibitId
            },
        },
    ]);
};

ExhibitCommentSchema.statics.findCommentsByExhibitId = async function (
    exhibitId: string
) {
    console.log("exhibitId", exhibitId);
    return this.aggregate([
        {
            $match: { exhibitId },
        },
        {
            $lookup: {
                from: "users",
                localField: "userId",
                foreignField: "_id",
                as: "user",
            },
        },
        {
            $unwind: "$user",
        },
        {
            $project: {
                _id: 1,
                exhibitId: 1,
                text: 1,
                createdAt: 1,
                updatedAt: 1,
                user: {
                    _id: "$user._id",
                    username: "$user.username",
                    _type: "$user._type",
                },
            },
        },
    ]);
};

type ExhibitCommentType = InferSchemaType<typeof ExhibitCommentSchema>;

interface ExhibitCommentModel extends Model<ExhibitCommentType> {
    findCommentsByExhibitId(exhibitId: string): Promise<any[]>;
    findCommentStatisticsForExhibits(exhibitIds: string[]): Promise<any[]>;
}

export const ExhibitComment = model<ExhibitCommentType, ExhibitCommentModel>(
    "ExhibitComment",
    ExhibitCommentSchema
);

// type RawExhibitComment = {
//     _id: Types.ObjectId;
//     exhibitId: number;
//     content: string;
//     createdAt: Date;
//     updatedAt: Date;
//     user: {
//         _id: Types.ObjectId;
//         username: string;
//         _type: string;
//     };
// };
