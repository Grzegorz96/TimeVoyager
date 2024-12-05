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
    type LocalUserWithConfirmDTO,
} from "./schemas";
import { formFields } from "./config";

export default function SignUpPage() {
    const onSubmit = async (data: LocalUserWithConfirmDTO) => {
        console.log(data);
    };

    return (
        <AuthContainer>
            <LeftSide />
            <RightSide>
                <Heading>Hi there!</Heading>
                <Description>
                    Start your adventure with TimeVoyager!
                </Description>
                <AuthForm<LocalUserWithConfirmDTO>
                    schema={localUserWithConfirmSchema}
                    onSubmit={onSubmit}
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
