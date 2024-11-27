import { envSchema, type Env } from "@/schemas";
import { ZodError } from "zod";
import dotenv from "dotenv";
dotenv.config();

let env: Env;

try {
    env = envSchema.parse({
        PORT: process.env.PORT,
        SESSION_SECRET: process.env.SESSION_SECRET,
        REDIS_HOST_DEV: process.env.REDIS_HOST_DEV,
        REDIS_PORT_DEV: process.env.REDIS_PORT_DEV,
        REDIS_HOST: process.env.REDIS_HOST,
        REDIS_PORT: process.env.REDIS_PORT,
        REDIS_PASSWORD: process.env.REDIS_PASSWORD,
        MONGO_DB_URL: process.env.MONGO_DB_URL,
        DISCORD_REDIRECT_URL: process.env.DISCORD_REDIRECT_URL,
        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_REDIRECT_URL: process.env.GOOGLE_REDIRECT_URL,
        EMAIL_SENDER_USER: process.env.EMAIL_SENDER_USER,
        EMAIL_SENDER_PASSWORD: process.env.EMAIL_SENDER_PASSWORD,
        ACTIVATION_ACCOUNT_URL: process.env.ACTIVATION_ACCOUNT_URL,
        EXPIRATION_ACCOUNT_TIME: process.env.EXPIRATION_ACCOUNT_TIME,
        REMINDER_EXPIRATION_ACCOUNT_TIME:
            process.env.REMINDER_EXPIRATION_ACCOUNT_TIME,
        NODE_ENV: process.env.NODE_ENV,
    });
} catch (err) {
    if (err instanceof ZodError) {
        const errorText = err.errors
            .map((e) => `${e.path[0]}: ${e.message}`)
            .join(", ");
        console.error(
            `The following environment variables are invalid: ${errorText}`
        );
    } else
        console.error(
            "An error occurred while parsing the environment variables"
        );

    process.exit(1);
}

export { env };
