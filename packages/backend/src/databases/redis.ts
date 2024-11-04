import { createClient } from "redis";
import { env } from "../utils/constants";

export const redisClient = createClient({
    password: env.REDIS_PASSWORD,
    socket: {
        host: env.REDIS_HOST,
        port: env.REDIS_PORT,
    },
});
