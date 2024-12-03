import {
    AuthContainer,
    LeftSide,
    RightSide,
    Heading,
    Description,
    StyledLink,
} from "@/components/ui";
import SignUpForm from "./components/SignUpForm";

export default function SignUpPage() {
    return (
        <AuthContainer>
            <LeftSide />
            <RightSide>
                <Heading>Hi there!</Heading>
                <Description>
                    Start your adventure with TimeVoyager!
                </Description>
                <SignUpForm />
                <Description $size="0.8rem">
                    Already have an account?{" "}
                    <StyledLink to="/sign-in">Sign in</StyledLink>
                </Description>
            </RightSide>
        </AuthContainer>
    );
}
