import SignInForm from "./components/SignInForm";
import DiscordAuth from "./components/DiscordAuth";
import GoogleAuth from "./components/GoogleAuth";
import {
    AuthContainer,
    LeftSide,
    RightSide,
    Heading,
    Description,
    StyledLink,
} from "@/components/ui";

export default function SignInPage() {
    return (
        <AuthContainer>
            <LeftSide />
            <RightSide>
                <Heading>Hi there!</Heading>
                <Description>Welcome back to TimeVoyager!</Description>
                <DiscordAuth />
                <GoogleAuth />
                <Description $size="0.8rem">Or sign in with email</Description>
                <SignInForm />
                <Description $size="0.8rem">
                    Don't have an account?{" "}
                    <StyledLink to="/sign-up">Sign up</StyledLink>
                </Description>
            </RightSide>
        </AuthContainer>
    );
}
