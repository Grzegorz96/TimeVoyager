import { StyledForm } from "./SignInForm.styles";
import { useSignInForm } from "../../hooks/useSignInForm";

export default function SignInForm() {
    const { register, handleSubmit, isSubmitting, signInUser } =
        useSignInForm();

    return (
        <StyledForm onSubmit={handleSubmit(signInUser)}>
            <input
                type="text"
                placeholder="Username"
                {...register("username")}
            />
            <input
                type="password"
                placeholder="Password"
                {...register("password")}
            />
            <button type="submit" disabled={isSubmitting}>
                Submit
            </button>
        </StyledForm>
    );
}
