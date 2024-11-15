import { Router } from "express";
import {
    validateSignUpData,
    validateSignInData,
} from "@/middlewares/validators";
import {
    signUpController,
    signInController,
    signOutController,
    discordController,
    discordRedirectController,
} from "@/controllers/auth";

const router = Router();

router.post("/sign-up", validateSignUpData, signUpController);

router.post("/sign-in", validateSignInData, signInController);

router.post("/sign-out", signOutController);

router.get("/discord", discordController);

router.get("/discord/redirect", discordRedirectController);

export default router;
