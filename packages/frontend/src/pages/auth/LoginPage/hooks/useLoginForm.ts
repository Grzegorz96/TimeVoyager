import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type LoginInput, loginSchema } from "../schemas/loginSchema";

export const useLoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
    });

    function loginUser(data: LoginInput) {
        console.log(data);
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        reset,
        setError,
        loginUser,
    };
};
