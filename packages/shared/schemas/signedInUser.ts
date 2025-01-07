import { localUserSchema } from "./localUser";
import { z } from "zod";

export const signedInUserSchema = localUserSchema.omit({ password: true });

export type SignedInUser = z.infer<typeof signedInUserSchema>;
