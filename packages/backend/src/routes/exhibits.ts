import { Router } from "express";
import { exhibitCommentDataValidator } from "@/middlewares/validators";

const router = Router();

router.post("/:exhibitId/comments", exhibitCommentDataValidator, (req, res) => {
    const params = req.params;
    const { comment } = req.body;
    console.log(params);
    res.status(201).send();
});

export default router;
