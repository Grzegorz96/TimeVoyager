import { apiSlice } from "./apiSlice";
import type {
    LocalCredentialsDTO,
    AuthSuccessResponse,
    BaseResponse,
    LocalUserDTO,
} from "@timevoyager/shared";
import { transformErrorResponse } from "@/utils";

export const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<AuthSuccessResponse, LocalCredentialsDTO>({
            query: (body) => ({
                url: "/auth/sign-in",
                method: "POST",
                body,
            }),
        }),
        signOut: builder.mutation<BaseResponse, void>({
            query: () => ({
                url: "/auth/sign-out",
                method: "POST",
            }),
            transformErrorResponse,
        }),
        signUp: builder.mutation<BaseResponse, LocalUserDTO>({
            query: (body) => ({
                url: "/auth/sign-up",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const { useSignInMutation, useSignOutMutation, useSignUpMutation } =
    authApiSlice;

// export const authApiSlice = createApi({
//     reducerPath: "authApi",
//     baseQuery: fetchBaseQuery({ baseUrl: "/api/auth" }),
//     tagTypes: ["Auth", "Status"],
//     endpoints: (builder) => ({
//         signIn: builder.mutation<AuthSuccessResponse, LocalCredentialsDTO>({
//             query: (body) => ({
//                 url: "/sign-in",
//                 method: "POST",
//                 body,
//             }),
//         }),
//         signOut: builder.mutation<BaseResponse, void>({
//             query: () => ({
//                 url: "/sign-out",
//                 method: "POST",
//             }),
//         }),
//         signUp: builder.mutation<BaseResponse, LocalUserDTO>({
//             query: (body) => ({
//                 url: "/sign-up",
//                 method: "POST",
//                 body,
//             }),
//         }),
//     }),
// });

// export const { useSignInMutation, useSignOutMutation, useSignUpMutation } =
//     authApiSlice;
