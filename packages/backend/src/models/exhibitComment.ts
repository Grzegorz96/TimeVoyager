import { Schema, Types, model, type InferSchemaType } from "mongoose";

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

type ExhibitCommentType = InferSchemaType<typeof ExhibitCommentSchema>;

export const ExhibitComment = model<ExhibitCommentType>(
    "ExhibitComment",
    ExhibitCommentSchema
);
