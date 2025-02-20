import { newLocalUserSchema } from "./newLocalUser";
import { z } from "zod";

export const signedInUserSchema = newLocalUserSchema.omit({ password: true });

export type SignedInUser = z.infer<typeof signedInUserSchema>;
