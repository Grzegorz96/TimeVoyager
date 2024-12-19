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
    localUserWithConfirmSchema,
    type LocalUserWithConfirm,
} from "@/schemas";
import { formFields } from "./config";

export default function SignUpPage() {
    return (
        <AuthContainer>
            <LeftSide />
            <RightSide>
                <Heading>Hi there!</Heading>
                <Description>
                    Start your adventure with TimeVoyager!
                </Description>
                <AuthForm<LocalUserWithConfirm>
                    type="sign-up"
                    schema={localUserWithConfirmSchema}
                    formFields={formFields}
                />
                <Description $size="0.8rem">
                    Already have an account?{" "}
                    <StyledLink to="/sign-in">Sign in</StyledLink>
                </Description>
            </RightSide>
        </AuthContainer>
    );
}
