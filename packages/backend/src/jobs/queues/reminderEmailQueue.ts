import { Queue } from "bullmq";
import { redisClient } from "@/databases";
import { env } from "@/utils";

const reminderEmailQueue = new Queue("reminderEmailQueue", {
    connection: redisClient,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
        delay: env.REMINDER_EXPIRATION_ACCOUNT_TIME,
    },
});

export const addReminderEmailToQueue = (
    email: string,
    activationToken: string
) =>
    reminderEmailQueue.add(
        "reminderEmail",
        {
            email,
            activationToken,
        },
        {
            jobId: activationToken,
        }
    );

export const removeReminderEmailFromQueue = (activationToken: string) =>
    reminderEmailQueue.remove(activationToken);
