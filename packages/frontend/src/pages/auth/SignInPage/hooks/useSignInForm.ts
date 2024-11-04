import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SignInInput, signInSchema } from "../schemas/signInSchema";

export const useSignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<SignInInput>({
        resolver: zodResolver(signInSchema),
    });

    function signInUser(data: SignInInput) {
        console.log(data);
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        reset,
        setError,
        signInUser,
    };
};
