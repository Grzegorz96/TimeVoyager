import { z } from "zod";
import { baseResponseSchema } from "./baseResponse";
import { exhibitCommentSchema } from "./exhibitComment";

export const exhibitCommentsResponseSchema = baseResponseSchema.extend({
    data: z.array(exhibitCommentSchema),
});

export type ExhibitCommentsResponse = z.infer<
    typeof exhibitCommentsResponseSchema
>;
