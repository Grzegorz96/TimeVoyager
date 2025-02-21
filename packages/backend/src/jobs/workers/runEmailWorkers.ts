import { fork, ChildProcess } from "child_process";
import path from "path";
import { env } from "@/utils";

const workerPath =
    env.NODE_ENV === "production"
        ? path.resolve(__dirname, "emailWorkers.js")
        : path.resolve(__dirname, "emailWorkers.ts");

const execArgv =
    env.NODE_ENV === "production"
        ? []
        : ["-r", "ts-node/register", "-r", "tsconfig-paths/register"];

export const runEmailWorkers = (): Promise<ChildProcess> => {
    return new Promise((resolve, reject) => {
        const emailWorkersProcess = fork(workerPath, [], { execArgv });

        emailWorkersProcess.on("message", (message) => {
            if (message === "workers_started") {
                return resolve(emailWorkersProcess);
            } else if (message === "workers_error") {
                return reject(new Error("Email workers failed to start"));
            }
        });

        emailWorkersProcess.on("error", (err) => {
            return reject(err);
        });

        emailWorkersProcess.on("exit", (code) => {
            if (code !== 0) {
                return reject(
                    new Error(`Email workers exited with code ${code}`)
                );
            } else {
                console.log("Email workers exited successfully");
            }
        });
    });
};
