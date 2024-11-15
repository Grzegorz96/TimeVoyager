import { z } from "zod";

export const localUserSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
});

export type LocalUserDTO = z.infer<typeof localUserSchema>;
