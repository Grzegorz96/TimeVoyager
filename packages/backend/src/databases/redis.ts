import Redis from "ioredis";
import { env } from "@/utils/constants";

export const redisClient = new Redis({
    host: env.REDIS_HOST_DEV,
    port: env.REDIS_PORT_DEV,
    maxRetriesPerRequest: null,
    // password: env.REDIS_PASSWORD,
    retryStrategy: (times) => {
        if (times >= 3) {
            console.log("Max retry attempts reached");
            return null;
        }

        return Math.min(times * 100, 2000);
    },
});
