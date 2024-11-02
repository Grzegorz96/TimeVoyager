import { StyledForm } from "./LoginForm.styles";
import { useLoginForm } from "../../hooks/useLoginForm";

export default function LoginForm() {
    const { register, handleSubmit, isSubmitting, loginUser } = useLoginForm();

    return (
        <StyledForm onSubmit={handleSubmit(loginUser)}>
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
