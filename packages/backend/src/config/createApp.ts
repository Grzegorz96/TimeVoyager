import express from "express";
import { type Express } from "express-serve-static-core";

export default function createApp(): Express {
    const app: Express = express();

    app.use(express.json());

    return app;
}
