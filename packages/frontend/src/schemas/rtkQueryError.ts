import { z } from "zod";
import { baseResponseSchema } from "@timevoyager/shared";

export const rtkQueryErrorSchema = z.object({
    status: baseResponseSchema.shape.status,
    data: baseResponseSchema,
});

export type RTKQueryError = z.infer<typeof rtkQueryErrorSchema>;
