import { z } from "zod";

export const testSchema = z.object({
    id: z.string(),
    name: z.string(),
    age: z.number(),
    isStudent: z.boolean(),
    hobbies: z.array(z.string()),
});
