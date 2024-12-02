import { Queue } from "bullmq";
import { redisClient } from "@/databases";
import { env } from "@/utils/constants";

const accountActivationReminderQueue = new Queue("accountActivationReminder", {
    connection: redisClient,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
        delay: env.REMINDER_EXPIRATION_ACCOUNT_TIME,
    },
});

export const addReminderToQueue = (email: string, activationToken: string) => {
    return accountActivationReminderQueue.add(
        "accountActivationReminder",
        {
            email,
            activationToken,
        },
        {
            jobId: activationToken,
        }
    );
};

export const removeReminderFromQueue = (activationToken: string) => {
    return accountActivationReminderQueue.remove(activationToken);
};
