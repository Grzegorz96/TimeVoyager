import IORedis from "ioredis";
import { createClient } from "redis";
import { env } from "@/config";

export const redisClient = new IORedis({
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

export const redisClientLimiter = createClient({
    socket: {
        host: env.REDIS_HOST_DEV,
        port: env.REDIS_PORT_DEV,
        // reconnectStrategy(retries, cause) {
        //     if (retries >= 3) {
        //         console.log("Max retry attempts reached");
        //         console.log(cause);
        //         return false;
        //     }

        //     return Math.min(retries * 100, 2000);
        // },
    },

    // password: env.REDIS_PASSWORD,
});
