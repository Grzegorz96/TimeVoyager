import { z } from "zod";
import { baseResponseSchema } from "./baseResponse";
import { exhibitCommentSchema } from "./exhibitComment";

export const addExhibitCommentResponseSchema = baseResponseSchema.extend({
    data: exhibitCommentSchema,
});

export type AddExhibitCommentResponse = z.infer<
    typeof addExhibitCommentResponseSchema
>;
