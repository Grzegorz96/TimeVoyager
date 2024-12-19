import { Worker, Job } from "bullmq";
import { sendEmail } from "@/utils/emails";
import { redisClient } from "@/databases";

const activationEmailWorker = new Worker(
    "activationEmailQueue",
    async (job: Job) => {
        const { email, activationToken } = job.data;
        await sendEmail("activation", email, activationToken);
    },
    {
        connection: redisClient,
    }
);

const reminderEmailWorker = new Worker(
    "reminderEmailQueue",
    async (job: Job) => {
        const { email, activationToken } = job.data;
        await sendEmail("reminder", email, activationToken);
    },
    {
        connection: redisClient,
    }
);

Promise.all([
    new Promise<void>((resolve, reject) => {
        activationEmailWorker.on("ready", () => resolve());

        activationEmailWorker.on("error", (_err) =>
            reject(new Error("Activation email worker failed"))
        );
    }),

    new Promise<void>((resolve, reject) => {
        reminderEmailWorker.on("ready", () => resolve());

        reminderEmailWorker.on("error", (_err) =>
            reject(new Error("Reminder email worker failed"))
        );
    }),
])
    .then(() => {
        process.send && process.send("workers_started");
    })
    .catch((error) => {
        console.error("One or both workers failed to start", error);
        process.send && process.send("workers_error");
    });

process.on("message", async (message) => {
    if (message === "shutdown") {
        await Promise.all([
            activationEmailWorker.close(),
            reminderEmailWorker.close(),
            redisClient.quit(),
        ]);
        process.exit(0);
    }
});
