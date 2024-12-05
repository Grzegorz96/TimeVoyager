import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodSchema } from "zod";

type UseAuthFormOptions<T> = {
    schema: ZodSchema<T>;
    onSubmit: (data: T) => Promise<void>;
};

export const useAuthForm = <T extends Record<string, any>>({
    schema,
    onSubmit,
}: UseAuthFormOptions<T>) => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        setError,
    } = useForm<T>({
        resolver: zodResolver(schema),
    });

    return {
        register,
        handleSubmit: handleSubmit(onSubmit),
        errors,
        isSubmitting,
        reset,
        setError,
    };
};
