import { endpointsRegEx } from "@/utils/constants";

export enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

type AuthConfig = {
    allowedMethods: HTTPMethod[];
    isPrivateRoute: boolean;
};

export const authConfig = new Map<RegExp, AuthConfig>([
    [
        endpointsRegEx.signIn,
        { allowedMethods: [HTTPMethod.POST], isPrivateRoute: false },
    ],
    [
        endpointsRegEx.signOut,
        { allowedMethods: [HTTPMethod.POST], isPrivateRoute: true },
    ],
    [
        endpointsRegEx.signUp,
        { allowedMethods: [HTTPMethod.POST], isPrivateRoute: false },
    ],
    [
        endpointsRegEx.discord,
        { allowedMethods: [HTTPMethod.GET], isPrivateRoute: false },
    ],
    [
        endpointsRegEx.discordRedirect,
        { allowedMethods: [HTTPMethod.GET], isPrivateRoute: false },
    ],
    [
        endpointsRegEx.google,
        { allowedMethods: [HTTPMethod.GET], isPrivateRoute: false },
    ],
    [
        endpointsRegEx.googleRedirect,
        { allowedMethods: [HTTPMethod.GET], isPrivateRoute: false },
    ],
    [
        endpointsRegEx.addExhibitComment,
        { allowedMethods: [HTTPMethod.POST], isPrivateRoute: true },
    ],
    [
        endpointsRegEx.addAndDeleteExhibitLike,
        {
            allowedMethods: [HTTPMethod.POST, HTTPMethod.DELETE],
            isPrivateRoute: true,
        },
    ],
    [
        endpointsRegEx.addAndDeleteExhibitCommentLike,
        {
            allowedMethods: [HTTPMethod.POST, HTTPMethod.DELETE],
            isPrivateRoute: true,
        },
    ],
]);
