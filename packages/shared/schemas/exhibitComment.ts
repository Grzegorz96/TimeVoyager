import { z } from "zod";
import { documentIdRegEx, UserType } from "../utils";
import { newLocalUserSchema } from "./newLocalUser";

export const exhibitCommentSchema = z.object({
    _id: z.string().regex(documentIdRegEx, "Invalid comment ID format"),
    exhibitId: z.coerce
        .number({ message: "Expected number" })
        .int()
        .min(1000000000)
        .max(9999999999),
    user: z.object({
        _id: z.string().regex(documentIdRegEx, "Invalid user ID format"),
        username: newLocalUserSchema.shape.username,
        _type: z.nativeEnum(UserType),
    }),
    content: z.string().trim().min(2).max(501),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
});

export type ExhibitCommentDTO = z.infer<typeof exhibitCommentSchema>;
