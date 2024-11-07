import { z } from "zod";

export const userSchema = z.object({
    username: z.string().min(3, "Username must be at least 3 characters long"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(8, "Password must be at least 8 characters long"),
    firstName: z
        .string()
        .min(1, "First name must be at least 1 character long"),
    lastName: z.string().min(1, "Last name must be at least 1 character long"),
    age: z.number().int().min(1, "Age must be at least 1"),
});

export type UserDTO = z.infer<typeof userSchema>;
