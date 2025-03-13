import { endpointsRegEx } from "@/utils/constants";

enum HTTPMethod {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    PATCH = "PATCH",
    DELETE = "DELETE",
}

type AuthConfig = {
    allowedMethod: HTTPMethod;
    isPrivateRoute: boolean;
};

export const authConfig = new Map<RegExp, AuthConfig>([
    [
        endpointsRegEx.signIn,
        { allowedMethod: HTTPMethod.POST, isPrivateRoute: false },
    ],
    [
        endpointsRegEx.signOut,
        { allowedMethod: HTTPMethod.POST, isPrivateRoute: true },
    ],
    [
        endpointsRegEx.signUp,
        { allowedMethod: HTTPMethod.POST, isPrivateRoute: false },
    ],
    [
        endpointsRegEx.discord,
        { allowedMethod: HTTPMethod.GET, isPrivateRoute: false },
    ],
    [
        endpointsRegEx.discordRedirect,
        { allowedMethod: HTTPMethod.GET, isPrivateRoute: false },
    ],
    [
        endpointsRegEx.google,
        { allowedMethod: HTTPMethod.GET, isPrivateRoute: false },
    ],
    [
        endpointsRegEx.googleRedirect,
        { allowedMethod: HTTPMethod.GET, isPrivateRoute: false },
    ],
    [
        endpointsRegEx.addExhibitComment,
        { allowedMethod: HTTPMethod.POST, isPrivateRoute: true },
    ],
    [
        endpointsRegEx.addExhibitLike,
        { allowedMethod: HTTPMethod.POST, isPrivateRoute: true },
    ],
]);
