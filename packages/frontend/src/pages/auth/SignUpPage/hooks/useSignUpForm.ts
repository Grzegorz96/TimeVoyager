import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    localUserWithConfirmSchema,
    type LocalUserWithConfirmDTO,
} from "../schemas/localUserWithConfirm";

export const useSignUpForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<LocalUserWithConfirmDTO>({
        resolver: zodResolver(localUserWithConfirmSchema),
    });

    async function signUpUser(data: LocalUserWithConfirmDTO) {
        console.log(data);
    }

    return {
        register,
        handleSubmit,
        errors,
        isSubmitting,
        reset,
        setError,
        signUpUser,
    };
};
