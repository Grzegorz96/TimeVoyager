import { Queue } from "bullmq";
import { redisClient } from "@/databases";

export const accountActivationReminderQueue = new Queue(
    "accountActivationReminder",
    {
        connection: redisClient,
    }
);

export const addReminderToQueue = (email: string, activationToken: string) => {
    return accountActivationReminderQueue.add(
        "accountActivationReminder",
        {
            email,
            activationToken,
        },
        {
            removeOnComplete: true,
            removeOnFail: true,
            jobId: activationToken,
            delay: 10000, // 50 minutes
        }
    );
};

export const removeReminderFromQueue = (activationToken: string) => {
    return accountActivationReminderQueue.remove(activationToken);
};
