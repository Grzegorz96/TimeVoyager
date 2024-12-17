import DiscordAuth from "./components/DiscordAuth";
import GoogleAuth from "./components/GoogleAuth";
import OAuthErrorModal from "./components/OAuthErrorModal";
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
    type LocalCredentialsDTO,
} from "@timevoyager/shared";
import { formFields } from "./config";
import { useLocation } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import { useSignInMutation } from "@/services/api";

export default function SignInPage() {
    const [signIn] = useSignInMutation();
    const location = useLocation();
    const error = new URLSearchParams(location.search).get("error");

    const onSubmit = async (data: LocalCredentialsDTO) => {
        const result = await signIn(data);
        console.log(result);
    };

    return (
        <>
            <AnimatePresence>
                {error && <OAuthErrorModal error={error} />}
            </AnimatePresence>
            <AuthContainer>
                <LeftSide />
                <RightSide>
                    <Heading>Hi there!</Heading>
                    <Description>Welcome back to TimeVoyager!</Description>
                    <DiscordAuth />
                    <GoogleAuth />
                    <Description $size="0.8rem">
                        Or sign in with email
                    </Description>
                    <AuthForm<LocalCredentialsDTO>
                        schema={localCredentialsSchema}
                        onSubmit={onSubmit}
                        formFields={formFields}
                    />
                    <Description $size="0.8rem">
                        Don't have an account?{" "}
                        <StyledLink to="/sign-up">Sign up</StyledLink>
                    </Description>
                </RightSide>
            </AuthContainer>
        </>
    );
}
