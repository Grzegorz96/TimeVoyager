import { Router } from "express";
import {
    exhibitCommentDataValidator,
    exhibitIdParamValidator,
    exhibitIdsParamValidator,
} from "@/middlewares/validators";
import {
    addExhibitCommentController,
    getExhibitCommentsController,
    addExhibitLikeController,
    getExhibitsStatsController,
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

router.post("/:exhibitId/likes", addExhibitLikeController);

router.get(
    "/:exhibitIds/stats",
    exhibitIdsParamValidator,
    getExhibitsStatsController
);

export default router;
