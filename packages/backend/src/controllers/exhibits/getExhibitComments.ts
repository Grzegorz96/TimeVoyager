import { type RequestHandler } from "express-serve-static-core";
import { ExhibitComment } from "@/models";
import { handleError } from "@/utils";
import type { ExhibitCommentDTO } from "@timevoyager/shared";

export const getExhibitCommentsController: RequestHandler<{
    exhibitId: string;
}> = async (req, res, next) => {
    // { message: string; status: number; data: ExhibitComment[] }
    try {
        console.log(req.body);
        const exhibitComments = await ExhibitComment.find({
            exhibitId: req.params.exhibitId,
        })
            .select("-__v")
            .populate("userId", "username");

        res.status(200).send({
            message: "Exhibit comments retrieved successfully",
            status: 200,
            data: exhibitComments,
        });
    } catch (err: unknown) {
        return handleError(err, next);
    }
};
