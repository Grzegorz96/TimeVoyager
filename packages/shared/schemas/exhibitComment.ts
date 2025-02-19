import { z } from "zod";

export const exhibitCommentSchema = z.object({
    userId: z.string(),
    content: z.string(),
});

export type ExhibitCommentDTO = z.infer<typeof exhibitCommentSchema>;
