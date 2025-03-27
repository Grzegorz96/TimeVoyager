import {
    Schema,
    Types,
    model,
    type InferSchemaType,
    type Model,
    type PipelineStage,
} from "mongoose";
import {
    exhibitIdRegEx,
    type ExhibitCommentDTO,
    type ExhibitStatsDTO,
} from "@timevoyager/shared";
import createHTTPError from "http-errors";

const populateCommentWithAuthor = (
    matchQuery: object,
    userId?: Express.User["_id"]
): PipelineStage[] => [
    { $match: matchQuery },
    {
        $lookup: {
            from: "users",
            localField: "authorId",
            foreignField: "_id",
            as: "author",
        },
    },
    { $unwind: "$author" },
    {
        $project: {
            _id: 1,
            exhibitId: 1,
            text: 1,
            createdAt: 1,
            updatedAt: 1,
            author: {
                _id: "$author._id",
                username: "$author.username",
                _type: "$author._type",
            },
            likesCount: { $size: "$likes" },
            ...(userId
                ? {
                      isLikedByUser: {
                          $in: [userId, "$likes"],
                      },
                  }
                : {}),
        },
    },
    { $sort: { createdAt: -1 } }, // Sortowanie po dacie w porządku malejącym
    { $limit: 10 }, // Ograniczenie wyników do 10 komentarzy
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
        authorId: {
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
        likes: {
            required: true,
            type: [
                {
                    type: Types.ObjectId,
                    // ref: "User",
                },
            ],
            ref: "User",
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

ExhibitCommentSchema.statics.findCommentsByExhibitId = function (
    exhibitId: ExhibitCommentDTO["exhibitId"],
    userId?: Express.User["_id"]
): Promise<ExhibitCommentDTO[]> {
    return this.aggregate(populateCommentWithAuthor({ exhibitId }, userId));
};

ExhibitCommentSchema.statics.findCommentsStatisticsForExhibits = function (
    exhibitIds: ExhibitCommentDTO["exhibitId"][]
): Promise<Omit<ExhibitStatsDTO, "likesCount" | "isLikedByUser">[]> {
    return this.aggregate([
        { $match: { exhibitId: { $in: exhibitIds } } }, // Filtrujemy po liście exhibitId
        {
            $group: {
                _id: "$exhibitId", // Grupujemy po exhibitId
                commentsCount: { $sum: 1 }, // Zliczamy liczbę komentarzy dla każdego exhibitId
            },
        },
        {
            $project: {
                _id: 0,
                exhibitId: "$_id",
                commentsCount: 1,
            },
        },
    ]);
};

ExhibitCommentSchema.statics.createAndPopulate = async function (
    commentData: Pick<ExhibitCommentDTO, "exhibitId" | "text">,
    userId: Express.User["_id"]
): Promise<ExhibitCommentDTO> {
    const session = await this.startSession();
    session.startTransaction();

    try {
        const { _id } = await this.insertOne(
            {
                ...commentData,
                authorId: userId,
            },
            { session }
        );

        const [populatedComment]: ExhibitCommentDTO[] = await this.aggregate(
            populateCommentWithAuthor({ _id }, userId)
        ).session(session);

        if (!populatedComment) {
            throw new Error("Failed to populate comment");
        }

        await session.commitTransaction();
        return populatedComment;
    } catch (err: unknown) {
        await session.abortTransaction();
        throw err;
    } finally {
        await session.endSession();
    }
};

ExhibitCommentSchema.statics.addCommentLike = async function (
    commentId: ExhibitCommentDTO["_id"],
    userId: Express.User["_id"]
): Promise<void> {
    const comment = await this.findById(commentId).select("likes");

    if (!comment) {
        throw createHTTPError(404, "Comment not found");
    }

    if (comment.likes.includes(userId)) {
        throw createHTTPError(409, "User already liked this comment");
    }

    await this.updateOne({ _id: commentId }, { $addToSet: { likes: userId } });
};

ExhibitCommentSchema.statics.deleteCommentLike = async function (
    commentId: ExhibitCommentDTO["_id"],
    userId: Express.User["_id"]
): Promise<void> {
    const comment = await this.findById(commentId).select("likes");

    if (!comment) {
        throw createHTTPError(404, "Comment not found");
    }

    if (!comment.likes.includes(userId)) {
        throw createHTTPError(409, "User has not liked this comment");
    }

    await this.updateOne({ _id: commentId }, { $pull: { likes: userId } });
};

type ExhibitCommentType = InferSchemaType<typeof ExhibitCommentSchema>;

interface ExhibitCommentModel extends Model<ExhibitCommentType> {
    findCommentsByExhibitId(
        exhibitId: ExhibitCommentDTO["exhibitId"],
        userId?: Express.User["_id"]
    ): Promise<ExhibitCommentDTO[]>;
    findCommentsStatisticsForExhibits(
        exhibitIds: ExhibitCommentDTO["exhibitId"][]
    ): Promise<Omit<ExhibitStatsDTO, "likesCount" | "isLikedByUser">[]>;
    createAndPopulate(
        commentData: Pick<ExhibitCommentDTO, "exhibitId" | "text">,
        userId: Express.User["_id"]
    ): Promise<ExhibitCommentDTO>;
    addCommentLike(
        commentId: ExhibitCommentDTO["_id"],
        userId: Express.User["_id"]
    ): Promise<void>;
    deleteCommentLike(
        commentId: ExhibitCommentDTO["_id"],
        userId: Express.User["_id"]
    ): Promise<void>;
}

export const ExhibitComment = model<ExhibitCommentType, ExhibitCommentModel>(
    "ExhibitComment",
    ExhibitCommentSchema
);
