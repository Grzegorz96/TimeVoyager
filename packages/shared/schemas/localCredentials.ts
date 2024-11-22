import { z } from "zod";
import { localUserSchema } from "./localUser";

export const localCredentialsSchema = localUserSchema.pick({
    email: true,
    password: true,
});

export type LocalCredentialsDTO = z.infer<typeof localCredentialsSchema>;
