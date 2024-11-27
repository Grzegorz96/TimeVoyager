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
