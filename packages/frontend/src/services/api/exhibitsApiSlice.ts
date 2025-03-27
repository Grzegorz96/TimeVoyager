import { apiSlice } from "./apiSlice";
import type {
    BaseResponse,
    ExhibitsStatsResponse,
    ExhibitCommentDTO,
    ExhibitStatsDTO,
    ExhibitCommentsResponse,
    AddExhibitCommentResponse,
} from "@timevoyager/shared";
import { showToast } from "@/utils";
import type { RootState } from "@reduxjs/toolkit/query";
import type { ThunkDispatch, UnknownAction } from "@reduxjs/toolkit";

const createOnQueryStarted =
    (errorMessage: string) =>
    async (
        _: unknown,
        { queryFulfilled }: { queryFulfilled: Promise<any> }
    ) => {
        try {
            await queryFulfilled;
        } catch (err) {
            showToast({
                message: errorMessage,
                type: "error",
            });
        }
    };

const updateExhibitStats = (
    exhibitId: string,
    getState: () => RootState<any, any, "api">,
    dispatch: ThunkDispatch<any, any, UnknownAction>,
    updates: Partial<Omit<ExhibitStatsDTO, "exhibitId">>
) => {
    const allStatsArgsCached = exhibitsApiSlice.util.selectCachedArgsForQuery(
        getState(),
        "getExhibitsStats"
    );

    const selectedArgs = allStatsArgsCached.find((args) =>
        args.includes(exhibitId)
    );

    if (selectedArgs) {
        dispatch(
            exhibitsApiSlice.util.updateQueryData(
                "getExhibitsStats",
                selectedArgs,
                (draft) => {
                    const exhibitStats = draft.data.find(
                        (stat) => stat.exhibitId === exhibitId
                    );
                    if (exhibitStats) {
                        if (updates.likesCount !== undefined) {
                            exhibitStats.likesCount += updates.likesCount;
                        }
                        if (updates.commentsCount !== undefined) {
                            exhibitStats.commentsCount += updates.commentsCount;
                        }
                        if (updates.isLikedByUser !== undefined) {
                            exhibitStats.isLikedByUser = updates.isLikedByUser;
                        }
                    }
                }
            )
        );
    }
};

export const exhibitsApiSlice = apiSlice
    .enhanceEndpoints({ addTagTypes: ["ExhibitsStats", "ExhibitComments"] })
    .injectEndpoints({
        endpoints: (builder) => ({
            addExhibitComment: builder.mutation<
                AddExhibitCommentResponse,
                Pick<ExhibitCommentDTO, "exhibitId" | "text">
            >({
                query: ({ exhibitId, ...body }) => ({
                    url: `/exhibits/${exhibitId}/comments`,
                    method: "POST",
                    body,
                }),
                onQueryStarted: async (
                    { exhibitId },
                    { dispatch, queryFulfilled, getState }
                ) => {
                    try {
                        const {
                            data: { data: newComment },
                        } = await queryFulfilled;

                        dispatch(
                            exhibitsApiSlice.util.updateQueryData(
                                "getExhibitComments",
                                exhibitId,
                                (draft) => {
                                    draft.data.unshift(newComment);
                                }
                            )
                        );

                        updateExhibitStats(exhibitId, getState, dispatch, {
                            commentsCount: 1,
                        });
                    } catch (err: any) {
                        showToast({
                            message:
                                err?.error?.data?.message ||
                                "Failed to add comment",
                            type: "error",
                        });
                    }
                },
            }),
            getExhibitComments: builder.query<
                ExhibitCommentsResponse,
                ExhibitCommentDTO["exhibitId"]
            >({
                query: (exhibitId) => ({
                    url: `/exhibits/${exhibitId}/comments`,
                    method: "GET",
                }),
                onQueryStarted: createOnQueryStarted(
                    "Failed to fetch comments"
                ),
                providesTags: (result) =>
                    result ? [{ type: "ExhibitComments", id: "LIST" }] : [],
            }),
            getExhibitsStats: builder.query<
                ExhibitsStatsResponse,
                ExhibitStatsDTO["exhibitId"][]
            >({
                query: (exhibitIds) => ({
                    url: `/exhibits/${exhibitIds}/stats`,
                    method: "GET",
                }),
                onQueryStarted: createOnQueryStarted(
                    "Failed to fetch statistics"
                ),
                providesTags: (result) =>
                    result ? [{ type: "ExhibitsStats", id: "LIST" }] : [],
            }),
            addExhibitLike: builder.mutation<
                BaseResponse,
                ExhibitStatsDTO["exhibitId"]
            >({
                query: (exhibitId) => ({
                    url: `/exhibits/${exhibitId}/likes`,
                    method: "POST",
                }),
                onQueryStarted: async (
                    exhibitId,
                    { dispatch, queryFulfilled, getState }
                ) => {
                    try {
                        await queryFulfilled;

                        updateExhibitStats(exhibitId, getState, dispatch, {
                            likesCount: 1,
                            isLikedByUser: true,
                        });
                    } catch (err: any) {
                        showToast({
                            message:
                                err?.error?.data?.message || "Failed to like",
                            type: "error",
                        });
                    }
                },
            }),
            deleteExhibitLike: builder.mutation<
                BaseResponse,
                ExhibitStatsDTO["exhibitId"]
            >({
                query: (exhibitId) => ({
                    url: `/exhibits/${exhibitId}/likes`,
                    method: "DELETE",
                }),
                onQueryStarted: async (
                    exhibitId,
                    { dispatch, queryFulfilled, getState }
                ) => {
                    try {
                        await queryFulfilled;

                        updateExhibitStats(exhibitId, getState, dispatch, {
                            likesCount: -1,
                            isLikedByUser: false,
                        });
                    } catch (err: any) {
                        showToast({
                            message:
                                err?.error?.data?.message || "Failed to unlike",
                            type: "error",
                        });
                    }
                },
            }),
            addExhibitCommentLike: builder.mutation<
                BaseResponse,
                Pick<ExhibitCommentDTO, "_id" | "exhibitId">
            >({
                query: ({ _id }) => ({
                    url: `/exhibits/comments/${_id}/likes`,
                    method: "POST",
                }),
                onQueryStarted: async (
                    { _id, exhibitId },
                    { dispatch, queryFulfilled }
                ) => {
                    try {
                        await queryFulfilled;

                        dispatch(
                            exhibitsApiSlice.util.updateQueryData(
                                "getExhibitComments",
                                exhibitId,
                                (draft) => {
                                    const comment = draft.data.find(
                                        (comment) => comment._id === _id
                                    );
                                    if (comment) {
                                        comment.likesCount += 1;
                                        comment.isLikedByUser = true;
                                    }
                                }
                            )
                        );
                    } catch (err: any) {
                        showToast({
                            message:
                                err?.error?.data?.message || "Failed to like",
                            type: "error",
                        });
                    }
                },
            }),
            deleteExhibitCommentLike: builder.mutation<
                BaseResponse,
                Pick<ExhibitCommentDTO, "_id" | "exhibitId">
            >({
                query: ({ _id }) => ({
                    url: `/exhibits/comments/${_id}/likes`,
                    method: "DELETE",
                }),
                onQueryStarted: async (
                    { _id, exhibitId },
                    { dispatch, queryFulfilled }
                ) => {
                    try {
                        await queryFulfilled;

                        dispatch(
                            exhibitsApiSlice.util.updateQueryData(
                                "getExhibitComments",
                                exhibitId,
                                (draft) => {
                                    const comment = draft.data.find(
                                        (comment) => comment._id === _id
                                    );
                                    if (comment) {
                                        comment.likesCount -= 1;
                                        comment.isLikedByUser = false;
                                    }
                                }
                            )
                        );
                    } catch (err: any) {
                        showToast({
                            message:
                                err?.error?.data?.message || "Failed to unlike",
                            type: "error",
                        });
                    }
                },
            }),
        }),
    });

export const {
    useAddExhibitCommentMutation,
    useGetExhibitCommentsQuery,
    useGetExhibitsStatsQuery,
    useAddExhibitLikeMutation,
    useDeleteExhibitLikeMutation,
    useAddExhibitCommentLikeMutation,
    useDeleteExhibitCommentLikeMutation,
} = exhibitsApiSlice;
