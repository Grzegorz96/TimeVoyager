import { z } from "zod";

export const errorDataSchema = z.object({
    status: z.number(),
    data: z.object({
        message: z.string(),
    }),
});

export type ErrorData = z.infer<typeof errorDataSchema>;
