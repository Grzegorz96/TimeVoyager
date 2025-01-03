import { z } from "zod";

export const baseResponseSchema = z.object({
    status: z.coerce.number().refine((val) => val >= 100 && val < 600),
    message: z.string(),
});

export type BaseResponse = z.infer<typeof baseResponseSchema>;
