import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    localCredentialsSchema,
    type LocalCredentialsDTO,
} from "@timevoyager/shared";

export const useSignInForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<LocalCredentialsDTO>({
        resolver: zodResolver(localCredentialsSchema),
    });

    async function signInUser(data: LocalCredentialsDTO) {
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
