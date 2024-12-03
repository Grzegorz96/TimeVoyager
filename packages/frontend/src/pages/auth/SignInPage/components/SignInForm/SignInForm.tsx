import { StyledForm, StyledInput, StyledButton } from "@/components/ui";
import { useSignInForm } from "../../hooks/useSignInForm";

export default function SignInForm() {
    const { register, handleSubmit, isSubmitting, signInUser } =
        useSignInForm();

    return (
        <StyledForm onSubmit={handleSubmit(signInUser)}>
            <StyledInput
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            <StyledInput
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <StyledButton type="submit" disabled={isSubmitting}>
                Submit
            </StyledButton>
        </StyledForm>
    );
}
