import { z } from "zod";
import { localUserSchema } from "./localUser";

export const localCredentialsSchema = z.object({
    emailOrUsername: z
        .string()
        .refine(
            (value) =>
                localUserSchema.shape.email.safeParse(value).success ||
                localUserSchema.shape.username.safeParse(value).success,
            {
                message: "Invalid email or username",
            }
        ),
    password: localUserSchema.shape.password,
});

export type LocalCredentialsDTO = z.infer<typeof localCredentialsSchema>;
