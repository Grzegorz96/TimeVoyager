import mongoose from "mongoose";
import { redisClient } from "./redis";
import { env } from "../utils/constants";

export const connectToDBs = async (cb: (error?: unknown) => void) => {
    try {
        await Promise.all([
            mongoose.connect(env.MONGO_DB_URI),
            redisClient.connect(),
        ]);
        console.log(`Connected to ${env.MONGO_DB_URI} and Redis server`);
        cb();
    } catch (error) {
        console.error(error);
        cb(error);
    }
};

export const disconnectFromDBs = async () => {
    try {
        await Promise.all([mongoose.disconnect(), redisClient.quit()]);

        console.log("Disconnected from MongoDB and Redis server");
    } catch (error) {
        console.error("Error during disconnection:", error);
    } finally {
        // process.exit(0);
    }
};
