import { ChildProcess } from "child_process";
import { type Express } from "express";
import { env } from "@/utils/constants";
import connectToDBs from "../databases";
import { createApp } from "./createApp";
// import { runEmailWorkers } from "@/jobs/workers";
import { shutdownSafely } from "./shutdownSafely";

export const startServer = async () => {
    let emailWorkersProcess: ChildProcess | null = null;

    try {
        await connectToDBs();
        console.log("Connected to MongoDB and Redis server");
        // emailWorkersProcess = await runEmailWorkers();
        // console.log("Email workers started");

        const app: Express = createApp();
        app.listen(env.PORT, () => {
            console.log(`Server is running on port ${env.PORT}`);
        });

        process.on("SIGINT", () => shutdownSafely(emailWorkersProcess));
        process.on("SIGTERM", () => shutdownSafely(emailWorkersProcess));
    } catch (err) {
        console.error("Error during application startup:", err);
        await shutdownSafely(emailWorkersProcess);
    }
};
