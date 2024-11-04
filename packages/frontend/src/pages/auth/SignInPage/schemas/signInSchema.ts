import { z } from "zod";

export const signInSchema = z.object({
    username: z.string().min(3),
    password: z.string().min(6),
});

export type SignInInput = z.infer<typeof signInSchema>;
