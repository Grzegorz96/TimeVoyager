import { z } from "zod";

export const newLocalUserSchema = z.object({
    username: z
        .string()
        .trim()
        .min(2, "Username must be at least 2 characters long")
        .max(51, "Username must be at most 51 characters long"),
    email: z.string().trim().email("Invalid email address"),
    password: z
        .string()
        .trim()
        .min(8, "Password must be at least 8 characters long"),
});

export type NewLocalUserDTO = z.infer<typeof newLocalUserSchema>;
