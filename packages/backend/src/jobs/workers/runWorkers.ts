import { fork, ChildProcess } from "child_process";
import path from "path";
import { env } from "@/utils/constants";

const workerPath =
    env.NODE_ENV === "production"
        ? path.resolve(__dirname, "reminderWorker.js")
        : path.resolve(__dirname, "reminderWorker.ts");

const execArgv =
    env.NODE_ENV === "production"
        ? []
        : ["-r", "ts-node/register", "-r", "tsconfig-paths/register"];

export const runReminderWorker = (): Promise<ChildProcess> => {
    return new Promise((resolve, reject) => {
        const workerProcess = fork(workerPath, [], { execArgv });

        workerProcess.on("message", (message) => {
            if (message === "worker_started") {
                return resolve(workerProcess);
            } else if (message === "worker_error") {
                return reject(new Error("Worker failed to start"));
            }
        });

        workerProcess.on("error", (err) => {
            return reject(err);
        });

        workerProcess.on("exit", (code) => {
            if (code !== 0) {
                return reject(new Error(`Worker exited with code ${code}`));
            } else {
                console.log("Worker exited with code 0");
            }
        });
    });
};
