import { Worker, Job } from "bullmq";
import { sendEmail } from "@/utils/emails";
import { redisClient } from "@/databases";

const reminderWorker = new Worker(
    "accountActivationReminder",
    async (job: Job) => {
        const { email, activationToken } = job.data;
        await sendEmail("reminder", email, activationToken);
    },
    {
        connection: redisClient,
    }
);

reminderWorker.on("ready", () => {
    process.send && process.send("worker_started");
});

reminderWorker.on("error", (err) => {
    process.send && process.send("worker_error");
});

process.on("message", async (message) => {
    if (message === "shutdown") {
        await Promise.all([reminderWorker.close(), redisClient.quit()]);
        process.exit(0);
    }
});
