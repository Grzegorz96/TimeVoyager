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
    deleteExhibitLikeController,
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

router.post(
    "/:exhibitId/likes",
    exhibitIdParamValidator,
    addExhibitLikeController
);

router.get(
    "/:exhibitIds/stats",
    exhibitIdsParamValidator,
    getExhibitsStatsController
);

router.delete(
    "/:exhibitId/likes",
    exhibitIdParamValidator,
    deleteExhibitLikeController
);

export default router;
