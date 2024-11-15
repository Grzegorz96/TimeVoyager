import express from "express";
import { type Express } from "express-serve-static-core";
import session from "express-session";
import passport from "passport";
import "@/strategies";
import RedisStore from "connect-redis";
import mainRouter from "@/routes";
import { env } from "@/utils/constants";
import { redisClient } from "@/databases";
import { errorHandler, notFoundHandler, authHandler } from "@/middlewares";

export default function createApp(): Express {
    const app: Express = express();

    app.use(
        express.json(),
        session({
            store: new RedisStore({
                client: redisClient,
                prefix: "TimeVoyager:",
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
