import { Router } from "express";
import {
    validateSignUpData,
    validateSignInData,
} from "@/middlewares/validators";
import { isAuthenticated, isUnauthenticated } from "@/middlewares";
import { signUpController, signInController } from "@/controllers/auth";
const router = Router();

router.post(
    "/sign-up",
    isUnauthenticated,
    validateSignUpData,
    signUpController
);

router.post(
    "/sign-in",
    isUnauthenticated,
    validateSignInData,
    signInController
);

router.get("/sign-out", isAuthenticated, (req, res) => {
    res.send("Logout route");
});

router.get("/discord", (req, res) => {
    res.send("Discord route");
});

router.get("/discord/redirect", (req, res) => {
    res.send("Discord redirect route");
});

export default router;
