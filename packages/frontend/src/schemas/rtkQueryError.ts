import { z } from "zod";
import { baseResponseSchema } from "@timevoyager/shared";

export const rtkQueryErrorSchema = z.object({
    status: z.number(),
    data: baseResponseSchema,
});

export type RTKQueryError = z.infer<typeof rtkQueryErrorSchema>;
