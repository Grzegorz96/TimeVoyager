import { Router } from "express";
import authRouter from "./auth";
import exhibitsRouter from "./exhibits";

const mainRouter = Router();

mainRouter.use("/auth", authRouter);
mainRouter.use("/exhibits", exhibitsRouter);

export default mainRouter;
