import { z } from "zod";
import { exhibitIdRegEx } from "../utils";

export const exhibitStatsSchema = z.object({
    exhibitId: z.string().regex(exhibitIdRegEx, "Invalid exhibit ID format"),
    likesCount: z.number().int().min(0),
    commentsCount: z.number().int().min(0),
    isLikedByUser: z.optional(z.boolean()),
});

export type ExhibitStatsDTO = z.infer<typeof exhibitStatsSchema>;
