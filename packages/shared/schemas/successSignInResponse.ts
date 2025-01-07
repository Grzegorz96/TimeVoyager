import { baseResponseSchema } from "./baseResponse";
import { signedInUserSchema } from "./signedInUser";
import { z } from "zod";

export const successSignInResponseSchema = baseResponseSchema.extend({
    user: signedInUserSchema,
});

export type SuccessSignInResponse = z.infer<typeof successSignInResponseSchema>;
