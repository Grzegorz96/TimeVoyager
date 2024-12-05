import { useAuthForm } from "@/hooks";
import {
    StyledAuthForm,
    AuthInputWrapper,
    AuthInput,
    AuthSubmit,
    TextError,
} from "./AuthForm.styles";
import type { ZodSchema } from "zod";
import { type Path } from "react-hook-form";

type AuthFormProps<T> = {
    schema: ZodSchema<T>;
    onSubmit: (data: T) => Promise<void>;
    formFields: Array<{
        name: Path<T>;
        type: string;
        placeholder: string;
    }>;
};

export default function AuthForm<T extends Record<string, any>>({
    schema,
    onSubmit,
    formFields,
}: AuthFormProps<T>) {
    const { register, handleSubmit, isSubmitting, errors } = useAuthForm<T>({
        schema,
        onSubmit,
    });
    return (
        <StyledAuthForm onSubmit={handleSubmit}>
            {formFields.map((field) => (
                <AuthInputWrapper key={field.name}>
                    <AuthInput
                        autoComplete="on"
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.name)}
                    />
                    {errors[field.name] && (
                        <TextError>
                            {(errors[field.name]?.message as string) ||
                                "Invalid input"}
                        </TextError>
                    )}
                </AuthInputWrapper>
            ))}
            <AuthSubmit type="submit" disabled={isSubmitting}>
                Submit
            </AuthSubmit>
        </StyledAuthForm>
    );
}
