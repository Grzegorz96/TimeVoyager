export const activationTokenRegEx =
    /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

export const sessionSecretRegex = /^[0-9a-f]{64}$/i;

export const endpointsRegEx = {
    signIn: /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/sign-in\/?$/i,
    signOut: /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/sign-out\/?$/i,
    signUp: /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/sign-up\/?$/i,
    discord: /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/discord\/?$/i,
    discordRedirect:
        /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/discord\/redirect\/?$/i,
    google: /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/google\/?$/i,
    googleRedirect: /^\/api\/?(?=\/|$)\/auth\/?(?=\/|$)\/google\/redirect\/?$/i,
    addExhibitComment:
        /^\/api\/?(?=\/|$)\/exhibits\/?(?=\/|$)(?:\/([^/]+?))\/comments\/?$/i,
    addAndDeleteExhibitLike:
        /^\/api\/?(?=\/|$)\/exhibits\/?(?=\/|$)(?:\/([^/]+?))\/likes\/?$/i,
    addExhibitCommentLike:
        /^\/api\/?(?=\/|$)\/exhibits\/?(?=\/|$)\/comments(?:\/([^/]+?))\/likes\/?$/i,
};
