import { Router } from "express";

const router = Router();

router.post("/sign-in", (req, res) => {
    res.send("Login route");
});

router.post("/sign-up", (req, res) => {
    res.send("Register route");
});

router.get("/sign-out", (req, res) => {
    res.send("Logout route");
});

export default router;
