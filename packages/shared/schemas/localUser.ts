import { z } from "zod";

export const localUserSchema = z.object({
    username: z
        .string()
        .min(2, "Username must be at least 2 characters long")
        .max(51, "Username must be at most 51 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LocalUserDTO = z.infer<typeof localUserSchema>;
