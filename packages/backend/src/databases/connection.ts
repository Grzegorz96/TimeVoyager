import mongoose from "mongoose";
import { redisClient } from "./redis";
import { env } from "@/utils/constants";

export const connectToDBs = async (cb: (err?: unknown) => void) => {
    try {
        await Promise.all([
            mongoose.connect(env.MONGO_DB_URI),
            redisClient.connect(),
        ]);
        console.log(`Connected to ${env.MONGO_DB_URI} and Redis server`);
        cb();
    } catch (err) {
        console.error(err);
        cb(err);
    }
};

export const disconnectFromDBs = async () => {
    try {
        await Promise.all([mongoose.disconnect(), redisClient.quit()]);

        console.log("Disconnected from MongoDB and Redis server");
    } catch (err) {
        console.error("Error during disconnection:", err);
    } finally {
        // process.exit(0);
    }
};
