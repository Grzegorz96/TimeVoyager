import express from "express";
import {
    RequestHandler,
    type Express,
    Request,
    Response,
    NextFunction,
} from "express-serve-static-core";
import session from "express-session";
import passport from "passport";
import "@/strategies/localStrategy";
import RedisStore from "connect-redis";
import mainRouter from "@/routes";
import { env } from "@/utils/constants";
import { redisClient } from "@/databases";
import { errorHandler, notFoundHandler } from "@/middlewares";

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
        (req: Request, res: Response, next: NextFunction) => {
            console.log("jestem w passport.session");

            console.log(req.user);
            console.log(req.session);

            next();
        }
    );

    app.use("/api", mainRouter);

    app.use(notFoundHandler, errorHandler);

    return app;
}
