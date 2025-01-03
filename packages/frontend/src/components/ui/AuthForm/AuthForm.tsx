import {
    StyledAuthForm,
    AuthInputWrapper,
    AuthInput,
    AuthSubmit,
    TextError,
    RootTextError,
    SubmitWrapper,
} from "./AuthForm.styles";
import { ZodSchema } from "zod";
import { type Path, get, useForm } from "react-hook-form";
import { type LocalCredentialsDTO } from "@timevoyager/shared";
import { type LocalUserWithConfirm, rtkQueryErrorSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/app";
import { setError } from "@/states/errorDataSlice";
import { useSignInMutation, useSignUpMutation } from "@/services/api";
import { useNavigate } from "react-router-dom";

type AuthFormProps<T> = {
    type: "sign-in" | "sign-up";
    schema: ZodSchema<T>;
    formFields: Array<{
        name: Path<T>;
        type: string;
        placeholder: string;
    }>;
};

export default function AuthForm<
    T extends LocalCredentialsDTO | LocalUserWithConfirm
>({ type, schema, formFields }: AuthFormProps<T>) {
    const dispatch = useAppDispatch();
    const [signIn] = useSignInMutation();
    const [signUp] = useSignUpMutation();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        setError: setFormError,
    } = useForm<T>({
        resolver: zodResolver(schema),
    });

    async function onSubmit(data: T) {
        try {
            switch (type) {
                case "sign-in":
                    const result = await signIn(data).unwrap();
                    console.log(result);
                    navigate("/");
                    break;
                case "sign-up":
                    await signUp(data).unwrap();
                    break;
                default:
                    const exhaustiveCheck: never = type;
                    console.error(exhaustiveCheck);
                    break;
            }
        } catch (error) {
            const parsedError = rtkQueryErrorSchema.safeParse(error);

            if (!parsedError.success) {
                dispatch(
                    setError({
                        message: "An unknown error occurred",
                        status: 500,
                    })
                );
                return;
            }

            const { data } = parsedError.data;

            if (data.status >= 400 && data.status < 500) {
                setFormError("root", {
                    type: "manual",
                    message: data.message,
                });
            } else {
                dispatch(
                    setError({
                        message: data.message,
                        status: data.status,
                    })
                );
            }
        }
    }

    return (
        <StyledAuthForm onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
                <AuthInputWrapper key={field.name}>
                    <AuthInput
                        autoComplete="on"
                        type={field.type}
                        placeholder={field.placeholder}
                        {...register(field.name)}
                    />
                    {get(errors, field.name) && (
                        <TextError>
                            {(errors[field.name]?.message as string) ||
                                "Invalid input"}
                        </TextError>
                    )}
                </AuthInputWrapper>
            ))}
            <SubmitWrapper>
                <AuthSubmit type="submit" disabled={isSubmitting}>
                    Submit
                </AuthSubmit>
                {errors.root && (
                    <RootTextError>{errors.root.message}</RootTextError>
                )}
            </SubmitWrapper>
        </StyledAuthForm>
    );
}
