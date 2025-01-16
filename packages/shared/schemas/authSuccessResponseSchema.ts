import { baseResponseSchema } from "./baseResponse";
import { signedInUserSchema } from "./signedInUser";
import { z } from "zod";

export const authSuccessResponseSchema = baseResponseSchema.extend({
    user: signedInUserSchema,
});

export type AuthSuccessResponse = z.infer<typeof authSuccessResponseSchema>;
