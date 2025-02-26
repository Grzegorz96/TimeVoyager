import { z } from "zod";
import { exhibitIdRegEx } from "../utils";

export const exhibitStatsSchema = z.object({
    exhibitId: z.string().regex(exhibitIdRegEx, "Invalid exhibit ID format"),
    likeCount: z.number().int().min(0),
    commentCount: z.number().int().min(0),
});

export type ExhibitStatsDTO = z.infer<typeof exhibitStatsSchema>;
