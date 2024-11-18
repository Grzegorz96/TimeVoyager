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
        MONGO_DB_URI: process.env.MONGO_DB_URI,
        DISCORD_REDIRECT_URI: process.env.DISCORD_REDIRECT_URI,
        DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
        DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
        GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
        GOOGLE_REDIRECT_URI: process.env.GOOGLE_REDIRECT_URI,
    });
} catch (error) {
    if (error instanceof ZodError)
        console.error(
            `The following environment variables are invalid: ${error.errors[0]?.message}`
        );
    else
        console.error(
            "An error occurred while parsing the environment variables"
        );

    process.exit(1);
}

export { env };
