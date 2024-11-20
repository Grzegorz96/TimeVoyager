import { z } from "zod";

export const envSchema = z.object({
    PORT: z.string().min(1),
    SESSION_SECRET: z
        .string()
        .length(64)
        .regex(/^[0-9a-f]+$/, {
            message: "Only hexadecimal characters allowed",
        }),
    REDIS_HOST_DEV: z.string().min(1),
    REDIS_PORT_DEV: z.string().min(1).pipe(z.coerce.number()),
    REDIS_HOST: z.string().min(1),
    REDIS_PORT: z
        .string()
        .min(1)
        .pipe(
            z.coerce.number({
                message: "Must be a string of digits",
            })
        ),
    REDIS_PASSWORD: z.string().min(1),
    MONGO_DB_URI: z.string().min(1),
    DISCORD_REDIRECT_URI: z.string().min(1),
    DISCORD_CLIENT_ID: z.string().min(1),
    DISCORD_CLIENT_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GOOGLE_REDIRECT_URI: z.string().min(1),
    EMAIL_SENDER_USER: z.string().email(),
    EMAIL_SENDER_PASSWORD: z.string().min(1),
});

export type Env = z.infer<typeof envSchema>;
