import { z } from "zod";

export const errorResponseSchema = z.object({
    status: z.number(),
    data: z.object({
        message: z.string(),
    }),
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
