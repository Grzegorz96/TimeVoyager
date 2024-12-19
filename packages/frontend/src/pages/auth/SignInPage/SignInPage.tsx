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
import { useSearchParams } from "react-router-dom";
import { AnimatePresence } from "motion/react";

export default function SignInPage() {
    const [searchParams] = useSearchParams();
    const oAuthError = searchParams.get("error");

    return (
        <>
            <AnimatePresence>
                {oAuthError && <OAuthErrorModal error={oAuthError} />}
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
        </>
    );
}
