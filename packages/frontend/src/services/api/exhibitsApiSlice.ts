import { apiSlice } from "./apiSlice";

const exhibitsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addExhibitComment: builder.mutation({
            query: ({ exhibitId, ...body }) => ({
                url: `/exhibits/${exhibitId}/comments`,
                method: "POST",
                body,
            }),
        }),
        getEhxhibitComments: builder.query({
            query: (exhibitId) => ({
                url: `/exhibits/${exhibitId}/comments`,
                method: "GET",
            }),
        }),
    }),
});

export const { useAddExhibitCommentMutation, useGetEhxhibitCommentsQuery } =
    exhibitsApiSlice;
