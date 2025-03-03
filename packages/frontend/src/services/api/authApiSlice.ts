import { apiSlice } from "./apiSlice";
import type {
    LocalCredentialsDTO,
    AuthSuccessResponse,
    BaseResponse,
    NewLocalUserDTO,
} from "@timevoyager/shared";
import { rtkQueryErrorSchema } from "@/schemas";

export const transformErrorResponse = (error: unknown): BaseResponse => {
    try {
        const { data } = rtkQueryErrorSchema.parse(error);
        return data;
    } catch {
        return {
            message: "An unknown error occurred",
            status: 500,
        };
    }
};

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
