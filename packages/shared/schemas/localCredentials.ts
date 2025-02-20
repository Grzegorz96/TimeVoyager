import { z } from "zod";
import { newLocalUserSchema } from "./newLocalUser";

export const localCredentialsSchema = newLocalUserSchema.omit({
    username: true,
});

export type LocalCredentialsDTO = z.infer<typeof localCredentialsSchema>;
