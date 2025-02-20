import { z } from "zod";
import { exhibitCommentSchema } from "./exhibitComment";

export const newExhibitCommentSchema = exhibitCommentSchema
    .pick({
        exhibitId: true,
        content: true,
    })
    .extend({
        userId: exhibitCommentSchema.shape.user.shape._id,
    });

export type NewExhibitCommentDTO = z.infer<typeof newExhibitCommentSchema>;
