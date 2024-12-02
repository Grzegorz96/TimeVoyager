import express from "express";
import { type Express } from "express-serve-static-core";
import session from "express-session";
import passport from "passport";
import "@/strategies";
import RedisStore from "connect-redis";
import { RedisStore as RedisStoreLimiter } from "rate-limit-redis";
import { rateLimit } from "express-rate-limit";
import { slowDown } from "express-slow-down";
import { redisClient, redisClientLimiter } from "@/databases";
import mainRouter from "@/routes";
import { env } from "@/utils/constants";
import { errorHandler, notFoundHandler, authHandler } from "@/middlewares";
import createError from "http-errors";

export default function createApp(): Express {
    const app: Express = express();

    app.use(
        rateLimit({
            windowMs: 60 * 1000,
            limit: 20,
            standardHeaders: "draft-7",
            legacyHeaders: false,
            handler: (req, res, next) =>
                next(
                    createError(
                        429,
                        "Too many requests, please try again later"
                    )
                ),
            store: new RedisStoreLimiter({
                sendCommand: (...args: string[]) =>
                    redisClientLimiter.sendCommand(args),
                prefix: "rate-limit:",
                resetExpiryOnChange: false,
            }),
        }),
        // slowDown({
        //     windowMs: 60 * 1000,
        //     delayAfter: 12,
        //     delayMs: (hits) => hits * 200,
        //     maxDelayMs: 5000,
        //     store: new RedisStoreLimiter({
        //         sendCommand: (...args: string[]) =>
        //             redisClientLimiter.sendCommand(args),
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
