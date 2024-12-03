import { localUserSchema } from "@timevoyager/shared";
import { z } from "zod";

export const localUserWithConfirmSchema = localUserSchema
    .extend({
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type LocalUserWithConfirmDTO = z.infer<
    typeof localUserWithConfirmSchema
>;
