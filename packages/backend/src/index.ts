import createApp from "./setup/createApp";
import { type Express } from "express-serve-static-core";
import { env } from "./utils/constants";
import connectToDBs from "./databases";
import { handleGracefulShutdown } from "./utils/helpers";
import { runReminderWorker } from "./jobs/workers";
import { ChildProcess } from "child_process";

const startServer = async () => {
    let workerProcess: ChildProcess | null = null;

    try {
        await connectToDBs();
        console.log("Connected to MongoDB and Redis server");
        workerProcess = await runReminderWorker();
        console.log("Reminder worker started");

        const app: Express = createApp();
        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });

        process.on("SIGINT", () => handleGracefulShutdown(workerProcess));
        process.on("SIGTERM", () => handleGracefulShutdown(workerProcess));
    } catch (err) {
        console.error("Error during application startup:", err);
        await handleGracefulShutdown(workerProcess);
    }
};

startServer();
