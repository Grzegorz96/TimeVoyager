import { apiSlice } from "./apiSlice";
import type {
    ExhibitsStatsResponse,
    ExhibitCommentDTO,
    ExhibitCommentsResponse,
} from "@timevoyager/shared";

const exhibitsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addExhibitComment: builder.mutation({
            query: ({ exhibitId, ...body }) => ({
                url: `/exhibits/${exhibitId}/comments`,
                method: "POST",
                body,
            }),
        }),
        getExhibitComments: builder.query<
            ExhibitCommentsResponse,
            ExhibitCommentDTO["exhibitId"]
        >({
            query: (exhibitId) => ({
                url: `/exhibits/${exhibitId}/comments`,
                method: "GET",
            }),
        }),
        getExhibitsStats: builder.query<
            ExhibitsStatsResponse,
            ExhibitCommentDTO["exhibitId"][]
        >({
            query: (exhibitIds) => ({
                url: `/exhibits/${exhibitIds}/stats`,
                method: "GET",
            }),
        }),
    }),
});

export const {
    useAddExhibitCommentMutation,
    useGetExhibitCommentsQuery,
    useGetExhibitsStatsQuery,
} = exhibitsApiSlice;
