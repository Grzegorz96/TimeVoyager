import { apiSlice } from "./apiSlice";
import type {
    LocalCredentialsDTO,
    AuthSuccessResponse,
    BaseResponse,
    NewLocalUserDTO,
} from "@timevoyager/shared";
import { transformErrorResponse } from "@/utils";

const authApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<AuthSuccessResponse, LocalCredentialsDTO>({
            query: (body) => ({
                url: "/auth/sign-in",
                method: "POST",
                body,
            }),
            transformErrorResponse,
        }),
        signOut: builder.mutation<BaseResponse, void>({
            query: () => ({
                url: "/auth/sign-out",
                method: "POST",
            }),
            transformErrorResponse,
        }),
        signUp: builder.mutation<BaseResponse, NewLocalUserDTO>({
            query: (body) => ({
                url: "/auth/sign-up",
                method: "POST",
                body,
            }),
            transformErrorResponse,
        }),
    }),
});

export const { useSignInMutation, useSignOutMutation, useSignUpMutation } =
    authApiSlice;
