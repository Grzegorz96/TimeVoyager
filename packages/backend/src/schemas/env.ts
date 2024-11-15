import { z } from "zod";

export const envSchema = z.object({
    PORT: z
        .string({
            errorMap: () => ({
                message: "PORT must be a string of digits",
            }),
        })
        .min(1),
    SESSION_SECRET: z
        .string({
            errorMap: () => ({
                message:
                    "SESSION SECRET must be a string of length 64 characters and contain only hexadecimal characters",
            }),
        })
        .length(64)
        .regex(/^[0-9a-f]+$/),
    REDIS_HOST_DEV: z.string().min(1),
    REDIS_PORT_DEV: z.string().min(1).pipe(z.coerce.number()),
    REDIS_HOST: z
        .string({
            errorMap: () => ({
                message: "REDIS_HOST must be a non-empty string",
            }),
        })
        .min(1),
    REDIS_PORT: z
        .string({
            errorMap: () => ({
                message: "REDIS_PORT must be a string of digits",
            }),
        })
        .min(1)
        .pipe(
            z.coerce.number({
                message: "REDIS_PORT must be a string of digits",
            })
        ),
    REDIS_PASSWORD: z
        .string({
            errorMap: () => ({
                message: "REDIS_PASSWORD must be a non-empty string",
            }),
        })
        .min(1),
    MONGO_DB_URI: z
        .string({
            errorMap: () => ({
                message: "MONGO_DB_URI must be a non-empty string",
            }),
        })
        .min(1),
    DISCORD_REDIRECT_URI: z
        .string({
            errorMap: () => ({
                message: "DISCORD_REDIRECT_URI must be a non-empty string",
            }),
        })
        .min(1),
    DISCORD_CLIENT_ID: z
        .string({
            errorMap: () => ({
                message: "DISCORD_CLIENT_ID must be a non-empty string",
            }),
        })
        .min(1),
    DISCORD_CLIENT_SECRET: z
        .string({
            errorMap: () => ({
                message: "DISCORD_CLIENT_SECRET must be a non-empty string",
            }),
        })
        .min(1),
});

export type Env = z.infer<typeof envSchema>;
