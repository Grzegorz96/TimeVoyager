import { Router } from "express";
import {
    validateSignUpData,
    validateSignInData,
} from "@/middlewares/validators";
import {
    signUpController,
    signInController,
    signOutController,
} from "@/controllers/auth";
const router = Router();

router.post("/sign-up", validateSignUpData, signUpController);

router.post("/sign-in", validateSignInData, signInController);

router.post("/sign-out", signOutController);

router.get("/discord", (req, res) => {
    res.send("Discord route");
});

router.get("/discord/redirect", (req, res) => {
    res.send("Discord redirect route");
});

export default router;
