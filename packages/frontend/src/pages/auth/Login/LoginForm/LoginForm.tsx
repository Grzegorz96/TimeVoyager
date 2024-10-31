import { StyledForm } from "./LoginForm.styles";
import { useLoginForm } from "../useLoginForm";

export default function LocalLoginFormComponent() {
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
