import { z } from "zod";

export const errorDataSchema = z.object({
    status: z.coerce.number(),
    message: z.string(),
});

export type ErrorData = z.infer<typeof errorDataSchema>;
