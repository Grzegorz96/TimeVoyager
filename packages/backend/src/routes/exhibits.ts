import { Router } from "express";
import {
    exhibitCommentDataValidator,
    exhibitIdParamValidator,
    exhibitIdsParamValidator,
    exhibitCommentIdParamValidator,
} from "@/middlewares/validators";
import {
    addExhibitCommentController,
    getExhibitCommentsController,
    addExhibitLikeController,
    getExhibitsStatsController,
    deleteExhibitLikeController,
    addExhibitCommentLikeController,
    deleteExhibitCommentLikeController,
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

router.post(
    "/comments/:commentId/likes",
    exhibitCommentIdParamValidator,
    addExhibitCommentLikeController
);

router.delete(
    "/comments/:commentId/likes",
    exhibitCommentIdParamValidator,
    deleteExhibitCommentLikeController
);

export default router;
