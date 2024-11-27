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
    REDIS_PORT: z.string().min(1).pipe(z.coerce.number()),
    REDIS_PASSWORD: z.string().min(1),
    MONGO_DB_URL: z.string().url(),
    DISCORD_REDIRECT_URL: z.string().url(),
    DISCORD_CLIENT_ID: z.string().min(1),
    DISCORD_CLIENT_SECRET: z.string().min(1),
    GOOGLE_CLIENT_ID: z.string().min(1),
    GOOGLE_CLIENT_SECRET: z.string().min(1),
    GOOGLE_REDIRECT_URL: z.string().url(),
    EMAIL_SENDER_USER: z.string().email(),
    EMAIL_SENDER_PASSWORD: z.string().min(1),
    ACTIVATION_ACCOUNT_URL: z.string().url(),
    EXPIRATION_ACCOUNT_TIME: z.string().min(1).pipe(z.coerce.number()),
    REMINDER_EXPIRATION_ACCOUNT_TIME: z.string().min(1).pipe(z.coerce.number()),
    NODE_ENV: z.enum(["development", "production"]),
});

export type Env = z.infer<typeof envSchema>;
