import { z } from "zod";
import { documentIdRegEx, exhibitIdRegEx, UserType } from "../utils";
import { newLocalUserSchema } from "./newLocalUser";

export const exhibitCommentSchema = z.object({
    _id: z.string().regex(documentIdRegEx, "Invalid comment ID format"),
    exhibitId: z.string().regex(exhibitIdRegEx, "Invalid exhibit ID format"),
    author: z.object({
        _id: z.string().regex(documentIdRegEx, "Invalid user ID format"),
        username: newLocalUserSchema.shape.username,
        _type: z.nativeEnum(UserType),
    }),
    text: z.string().trim().min(1).max(501),
    likesCount: z.number(),
    isLikedByUser: z.boolean().optional(),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
});

export type ExhibitCommentDTO = z.infer<typeof exhibitCommentSchema>;
