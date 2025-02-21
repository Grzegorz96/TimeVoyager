import {
    Schema,
    Types,
    model,
    type InferSchemaType,
    type Model,
} from "mongoose";

const ExhibitCommentSchema = new Schema(
    {
        exhibitId: {
            type: Number,
            required: true,
            min: 1000000000,
            max: 9999999999,
        },
        userId: {
            type: Types.ObjectId,
            ref: "User",
            required: true,
        },
        content: {
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

ExhibitCommentSchema.statics.findCommentsByExhibitId = async function (
    exhibitId: number
) {
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
                content: 1,
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

type RawExhibitComment = {
    _id: Types.ObjectId;
    exhibitId: number;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    user: {
        _id: Types.ObjectId;
        username: string;
        _type: string;
    };
};

type ExhibitCommentType = InferSchemaType<typeof ExhibitCommentSchema>;

interface ExhibitCommentModel extends Model<ExhibitCommentType> {
    findCommentsByExhibitId(exhibitId: number): Promise<any[]>;
}

export const ExhibitComment = model<ExhibitCommentType, ExhibitCommentModel>(
    "ExhibitComment",
    ExhibitCommentSchema
);
