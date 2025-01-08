import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    LocalCredentialsDTO,
    AuthSuccessResponse,
    BaseResponse,
    LocalUserDTO,
} from "@timevoyager/shared";
import { setUser, clearUser } from "@/states/userSlice";
import { setError } from "@/states/errorSlice";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }),
    tagTypes: ["Auth"],
    keepUnusedDataFor: 60,
    endpoints: (builder) => ({
        signIn: builder.mutation<AuthSuccessResponse, LocalCredentialsDTO>({
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
        signUp: builder.mutation<BaseResponse, LocalUserDTO>({
            query: (body) => ({
                url: "/sign-up",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Auth"],
        }),
        getStatus: builder.query<AuthSuccessResponse, void>({
            query: () => "/status",
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    dispatch(setUser(result.data.user));
                } catch (err) {
                    // console.error(err);
                }
                //     if (err.error.status === 401) {
                //         console.error(err);
                //         dispatch(clearUser());
                //     } else {
                //         dispatch(
                //             setError({
                //                 message:
                //                     err?.error.data?.message ||
                //                     "An unknown error occurred",
                //                 status: err?.error.data?.status || 500,
                //             })
                //         );
                //     }
                // }
            },
            // providesTags: ["Auth"],
        }),
    }),
});

export const {
    useSignInMutation,
    useSignOutMutation,
    useSignUpMutation,
    useGetStatusQuery,
} = authApi;
