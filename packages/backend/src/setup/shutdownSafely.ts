import { ChildProcess } from "child_process";
import { disconnectFromDBs } from "@/databases";

export const shutdownSafely = async (
    emailWorkersProcess: ChildProcess | null
) => {
    try {
        await disconnectFromDBs();
        console.log("Disconnected from MongoDB and Redis server");

        if (emailWorkersProcess) {
            emailWorkersProcess.send("shutdown");
        }
    } catch (err) {
        console.error("Error during shutdown:", err);
    } finally {
        // process.exit(0);
    }
};
