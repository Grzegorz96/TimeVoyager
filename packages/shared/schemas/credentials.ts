import { z } from "zod";
import { userSchema } from "./user";

export const creditentialsSchema = z.object({
    emailOrUsername: z
        .string()
        .refine(
            (value) =>
                userSchema.shape.email.safeParse(value).success ||
                userSchema.shape.username.safeParse(value).success,
            {
                message: "Invalid email or username",
            }
        ),
    password: userSchema.shape.password,
});

export type CreditentialsDTO = z.infer<typeof creditentialsSchema>;
