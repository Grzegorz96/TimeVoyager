import { z } from "zod";
import { documentIdRegEx } from "../utils";

export const exhibitCommentSchema = z.object({
    _id: z.string().regex(documentIdRegEx, "Invalid comment ID format"),
    exhibitId: z.coerce
        .number({ message: "Expected number" })
        .int()
        .min(1000000000)
        .max(9999999999),
    user: z.object({
        _id: z.string().regex(documentIdRegEx, "Invalid user ID format"),
        username: z.string().min(2).max(51),
        _type: z.string(),
    }),
    content: z.string().trim().min(2).max(501),
    createdAt: z.string().datetime({ offset: true }),
    updatedAt: z.string().datetime({ offset: true }),
});

export type ExhibitCommentDTO = z.infer<typeof exhibitCommentSchema>;
