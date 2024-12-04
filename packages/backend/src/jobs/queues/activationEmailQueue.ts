import { Queue } from "bullmq";
import { redisClient } from "@/databases";

const activationEmailQueue = new Queue("activationEmailQueue", {
    connection: redisClient,
    defaultJobOptions: {
        removeOnComplete: true,
        removeOnFail: true,
    },
});

export const addActivationEmailToQueue = (
    email: string,
    activationToken: string
) =>
    activationEmailQueue.add("activationEmail", {
        email,
        activationToken,
    });
