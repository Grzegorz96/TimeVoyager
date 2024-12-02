import mongoose from "mongoose";
import { redisClient, redisClientLimiter } from "./redis";
import { env } from "@/utils/constants";

export const connectToDBs = () =>
    Promise.all([
        mongoose.connect(env.MONGO_DB_URL),
        redisClient.ping(),
        redisClientLimiter.connect(),
    ]);

export const disconnectFromDBs = () => {
    const tasks: Promise<void | string>[] = [];

    if (mongoose.connection.readyState === 1) {
        tasks.push(mongoose.disconnect());
    }
    if (redisClientLimiter.isOpen) {
        tasks.push(redisClientLimiter.quit());
    }
    if (redisClient.status === "connect" || redisClient.status === "ready") {
        tasks.push(redisClient.quit());
    }

    return Promise.all(tasks);
};
