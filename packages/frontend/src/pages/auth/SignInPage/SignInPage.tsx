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
    type LocalCredentialsDTO,
} from "@timevoyager/shared";
import { formFields } from "./config";

export default function SignInPage() {
    const onSubmit = async (data: LocalCredentialsDTO) => {
        console.log(data);
    };

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
    );
}
