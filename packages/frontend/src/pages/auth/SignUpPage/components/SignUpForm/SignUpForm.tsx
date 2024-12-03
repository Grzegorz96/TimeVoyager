import { StyledForm, StyledInput, StyledButton } from "@/components/ui";
import { useSignUpForm } from "../../hooks/useSignUpForm";

export default function SignUpForm() {
    const { register, handleSubmit, isSubmitting, signUpUser, errors } =
        useSignUpForm();
    console.log(errors);
    return (
        <StyledForm onSubmit={handleSubmit(signUpUser)}>
            <StyledInput
                type="email"
                placeholder="Email"
                {...register("email")}
            />
            <StyledInput
                type="text"
                placeholder="Username"
                {...register("username")}
            />
            <StyledInput
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <StyledInput
                type="password"
                placeholder="Confirm Password"
                {...register("confirmPassword")}
            />
            <StyledButton type="submit" disabled={isSubmitting}>
                Submit
            </StyledButton>
        </StyledForm>
    );
}
