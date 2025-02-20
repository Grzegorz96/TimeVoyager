import { Router } from "express";
import {
    exhibitCommentDataValidator,
    exhibitIdParamValidator,
} from "@/middlewares/validators";
import {
    addExhibitCommentController,
    getExhibitCommentsController,
} from "@/controllers/exhibits";

const router = Router();

router.post(
    "/:exhibitId/comments",
    exhibitCommentDataValidator,
    addExhibitCommentController
);

router.get(
    "/:exhibitId/comments",
    exhibitIdParamValidator,
    getExhibitCommentsController
);

export default router;
