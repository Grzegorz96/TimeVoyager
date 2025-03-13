import { apiSlice } from "./apiSlice";
import type {
    BaseResponse,
    ExhibitsStatsResponse,
    ExhibitCommentDTO,
    ExhibitStatsDTO,
    ExhibitCommentsResponse,
    AddExhibitCommentResponse,
} from "@timevoyager/shared";
import { showToast } from "@/components/ui";

const createOnQueryStarted =
    (errorMessage: string) =>
    async (
        _: unknown,
        { queryFulfilled }: { queryFulfilled: Promise<any> }
    ) => {
        try {
            await queryFulfilled;
        } catch (error) {
            showToast({
                message: errorMessage,
                type: "error",
            });
        }
    };

export const exhibitsApiSlice = apiSlice
    .enhanceEndpoints({ addTagTypes: ["ExhibitsStats"] })
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

                        const allStatsArgsCached =
                            exhibitsApiSlice.util.selectCachedArgsForQuery(
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
                                            (stat) =>
                                                stat.exhibitId === exhibitId
                                        );
                                        if (exhibitStats) {
                                            exhibitStats.commentsCount += 1;
                                        }
                                    }
                                )
                            );
                        }
                    } catch (error) {
                        showToast({
                            message: "Failed to add comment",
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

                        const allStatsArgsCached =
                            exhibitsApiSlice.util.selectCachedArgsForQuery(
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
                                            (stat) =>
                                                stat.exhibitId === exhibitId
                                        );
                                        if (exhibitStats) {
                                            exhibitStats.likesCount += 1;
                                            exhibitStats.isLikedByUser = true;
                                        }
                                    }
                                )
                            );
                        }
                    } catch (error) {
                        showToast({
                            message: "Failed to add like",
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
} = exhibitsApiSlice;
