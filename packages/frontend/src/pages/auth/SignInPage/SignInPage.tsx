import DiscordAuth from "./components/DiscordAuth";
import GoogleAuth from "./components/GoogleAuth";
import {
    AuthContainer,
    LeftSide,
    RightSide,
    Heading,
    Description,
    StyledLink,
    AuthForm,
} from "@/components/ui";
import {
    localCredentialsSchema,
    baseResponseSchema,
    type LocalCredentialsDTO,
} from "@timevoyager/shared";
import { formFields } from "./config";
import { useSearchParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useAppDispatch } from "@/app";
import { setError } from "@/states/errorSlice";

export default function SignInPage() {
    const location = useLocation();
    const dispatch = useAppDispatch();

    const state = location.state;
    useEffect(() => {
        if (state) {
            dispatch(setError(state));
        }
    }, [state, dispatch]);

    useEffect(() => {
        const errorParams = {
            message: new URLSearchParams(location.search).get("error"),
            status: new URLSearchParams(location.search).get("status"),
        };

        const parsedErrorParams = baseResponseSchema.safeParse(errorParams);

        if (parsedErrorParams.success) {
            dispatch(setError(parsedErrorParams.data));
        }
    }, [location, dispatch]);

    return (
        <AuthContainer>
            <LeftSide />
            <RightSide>
                <Heading>Hi there!</Heading>
                <Description>Welcome back to TimeVoyager!</Description>
                <DiscordAuth />
                <GoogleAuth />
                <Description $size="0.8rem">Or sign in with email</Description>
                <AuthForm<LocalCredentialsDTO>
                    type="sign-in"
                    schema={localCredentialsSchema}
                    formFields={formFields}
                />
                <Description $size="0.8rem">
                    Don't have an account?{" "}
                    <StyledLink to="/sign-up">Sign up</StyledLink>
                </Description>
            </RightSide>
        </AuthContainer>
    );
}

// const [searchParams, setSearchParams] = useSearchParams();
// const location = useLocation();
// const dispatch = useAppDispatch();

// useEffect(() => {
//     const errorParams = {
//         message: searchParams.get("error"),
//         status: searchParams.get("status"),
//     };

//     const parsedErrorParams = baseResponseSchema.safeParse(errorParams);

//     if (parsedErrorParams.success) {
//         dispatch(setError(parsedErrorParams.data));
//         setSearchParams(
//             (params) => {
//                 params.delete("error");
//                 params.delete("status");
//                 return params;
//             },
//             { replace: true }
//         );
//     }
// }, []);
