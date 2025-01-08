import { Router } from "express";
import {
    signUpDataValidator,
    signInDataValidator,
    activationTokenValidator,
} from "@/middlewares/validators";
import {
    signUpController,
    activateAccountController,
    signInController,
    signOutController,
    discordController,
    discordRedirectController,
    googleController,
    googleRedirectController,
    statusController,
} from "@/controllers/auth";
import { oAuthErrorHandler } from "@/middlewares";

const router = Router();

router.post("/sign-in", signInDataValidator, signInController);

router.post("/sign-out", signOutController);

router.post("/sign-up", signUpDataValidator, signUpController);

router.get(
    "/activate/:activationToken",
    activationTokenValidator,
    activateAccountController
);

router.get("/discord", discordController);

router.get("/discord/redirect", oAuthErrorHandler, discordRedirectController);

router.get("/google", googleController);

router.get("/google/redirect", oAuthErrorHandler, googleRedirectController);

router.get("/status", statusController);

export default router;
