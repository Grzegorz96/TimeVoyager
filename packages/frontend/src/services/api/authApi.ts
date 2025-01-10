import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type {
    LocalCredentialsDTO,
    AuthSuccessResponse,
    BaseResponse,
    LocalUserDTO,
} from "@timevoyager/shared";
import { setUser } from "@/states/userSlice";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }),
    tagTypes: ["Auth"],
    // keepUnusedDataFor: 0,
    // refetchOnMountOrArgChange: true,
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
            // invalidatesTags: ["Auth"],
        }),
        getStatus: builder.query<AuthSuccessResponse, void>({
            query: () => "/status",
            async onQueryStarted(_, { dispatch, queryFulfilled }) {
                try {
                    const result = await queryFulfilled;
                    console.log(result);
                    dispatch(setUser(result.data.user));
                } catch (err) {
                    // console.error(err);
                }
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
