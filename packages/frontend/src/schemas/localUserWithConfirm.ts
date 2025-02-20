import { newLocalUserSchema } from "@timevoyager/shared";
import { z } from "zod";

export const localUserWithConfirmSchema = newLocalUserSchema
    .extend({
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

export type LocalUserWithConfirm = z.infer<typeof localUserWithConfirmSchema>;
