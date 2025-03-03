import {
    Schema,
    Types,
    model,
    type InferSchemaType,
    type Model,
} from "mongoose";
import {
    exhibitIdRegEx,
    type NewExhibitCommentDTO,
    type ExhibitCommentDTO,
} from "@timevoyager/shared";

const populateCommentWithUser = (matchQuery: object) => [
    { $match: matchQuery },
    {
        $lookup: {
            from: "users",
            localField: "userId",
            foreignField: "_id",
            as: "user",
        },
    },
    { $unwind: "$user" },
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
];

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
            minLength: [1, "Content must be at least 1 characters long"],
            maxLength: [501, "Content must be at most 501 characters long"],
        },
    },
    {
        timestamps: true,
    }
);

ExhibitCommentSchema.statics.createAndPopulate = async function (
    commentData: NewExhibitCommentDTO
): Promise<ExhibitCommentDTO> {
    const newComment = await this.create(commentData);

    const [populatedComment]: ExhibitCommentDTO[] = await this.aggregate(
        populateCommentWithUser({ _id: newComment._id })
    );
    console.log("to pop com", populatedComment);
    if (!populatedComment) {
        throw new Error("Failed to populate comment");
    }

    return populatedComment;
};

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
    return this.aggregate(populateCommentWithUser({ exhibitId }));
};

type ExhibitCommentType = InferSchemaType<typeof ExhibitCommentSchema>;

interface ExhibitCommentModel extends Model<ExhibitCommentType> {
    findCommentsByExhibitId(exhibitId: string): Promise<any[]>;
    findCommentStatisticsForExhibits(exhibitIds: string[]): Promise<any[]>;
    createAndPopulate(
        commentData: NewExhibitCommentDTO
    ): Promise<ExhibitCommentDTO>;
}

export const ExhibitComment = model<ExhibitCommentType, ExhibitCommentModel>(
    "ExhibitComment",
    ExhibitCommentSchema
);
