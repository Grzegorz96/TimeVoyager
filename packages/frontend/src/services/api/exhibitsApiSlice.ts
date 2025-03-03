import { apiSlice } from "./apiSlice";
import type {
    ExhibitsStatsResponse,
    ExhibitCommentDTO,
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

const exhibitsApiSlice = apiSlice.injectEndpoints({
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
        }),
        getExhibitComments: builder.query<
            ExhibitCommentsResponse,
            ExhibitCommentDTO["exhibitId"]
        >({
            query: (exhibitId) => ({
                url: `/exhibits/${exhibitId}/comments`,
                method: "GET",
            }),
            onQueryStarted: createOnQueryStarted("Failed to fetch comments"),
        }),
        getExhibitsStats: builder.query<
            ExhibitsStatsResponse,
            ExhibitCommentDTO["exhibitId"][]
        >({
            query: (exhibitIds) => ({
                url: `/exhibits/${exhibitIds}/stats`,
                method: "GET",
            }),
            onQueryStarted: createOnQueryStarted("Failed to fetch statistics"),
        }),
    }),
});

export const {
    useAddExhibitCommentMutation,
    useGetExhibitCommentsQuery,
    useGetExhibitsStatsQuery,
} = exhibitsApiSlice;
