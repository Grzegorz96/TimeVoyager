import express from "express";
import { type Express } from "express-serve-static-core";
import session from "express-session";
import passport from "passport";
import "@/strategies";
import RedisStore from "connect-redis";
import { RedisStore as RedisStoreLimit } from "rate-limit-redis";
import mainRouter from "@/routes";
import { env } from "@/utils/constants";
import { redisClient } from "@/databases";
import { errorHandler, notFoundHandler, authHandler } from "@/middlewares";
// import { rateLimit } from "express-rate-limit";
import { slowDown } from "express-slow-down";
import { createClient } from "redis";
import rateLimit from "ioredis";

// const redisClient2 = createClient({
//     socket: {
//         host: env.REDIS_HOST_DEV,
//         port: env.REDIS_PORT_DEV,
//     },
// });
// redisClient2.connect();
export default function createApp(): Express {
    const app: Express = express();

    app.use(
        // rateLimit({
        //     windowMs: 60 * 1000,
        //     limit: 10,
        //     standardHeaders: "draft-7",
        //     legacyHeaders: false,
        //     store: new RedisStoreLimit({
        //         sendCommand: (...args: string[]) =>
        //             redisClient.call(),
        //         prefix: "rate-limit:",
        //         resetExpiryOnChange: false,
        //     }),
        // }),
        // rateLimit({
        //     client: redisClient,
        //     window
        // }),
        // slowDown({
        //     windowMs: 60 * 1000,
        //     delayAfter: 20,
        //     delayMs: (hits) => hits * 200,
        //     maxDelayMs: 5000,
        //     store: new RedisStoreLimit({
        //         sendCommand: (...args: string[]) =>
        //             redisClient.call(args),
        //         prefix: "slow-down:",
        //         resetExpiryOnChange: false,
        //     }),

        // }),
        express.json(),
        session({
            store: new RedisStore({
                client: redisClient,
                prefix: "session:",
            }),
            secret: env.SESSION_SECRET,
            saveUninitialized: false,
            resave: false,
            cookie: {
                maxAge: 1000 * 60 * 60 * 24 * 7,
                httpOnly: true,
                secure: false,
            },
        }),
        passport.initialize(),
        passport.session(),
        authHandler
    );

    app.use("/api", mainRouter);

    app.use(notFoundHandler, errorHandler);

    return app;
}
