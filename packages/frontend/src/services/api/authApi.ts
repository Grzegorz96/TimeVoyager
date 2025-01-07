import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    LocalCredentialsDTO,
    SuccessSignInResponse,
    BaseResponse,
} from "@timevoyager/shared";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }),
    tagTypes: ["Auth"],
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        signIn: builder.mutation<SuccessSignInResponse, LocalCredentialsDTO>({
            query: (body) => ({
                url: "/sign-in",
                method: "POST",
                body,
            }),

            // providesTags: ["Auth"],
            // keepUnusedDataFor: 2,
            // invalidatesTags: ["Auth"],
        }),
        signOut: builder.mutation<BaseResponse, void>({
            query: () => ({
                url: "/sign-out",
                method: "POST",
            }),
            // invalidatesTags: ["Auth"],
        }),
        signUp: builder.mutation({
            query: (body) => ({
                url: "/sign-up",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Auth"],
        }),
        status: builder.query({
            query: () => "/status",
            providesTags: ["Auth"],
        }),
    }),
});

export const {
    useSignInMutation,
    useSignOutMutation,
    useSignUpMutation,
    useStatusQuery,
} = authApi;
