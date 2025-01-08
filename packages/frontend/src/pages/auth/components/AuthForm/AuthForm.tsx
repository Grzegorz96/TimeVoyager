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
import { setError } from "@/states/errorSlice";
import { setUser } from "@/states/userSlice";
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
        reset,
    } = useForm<T>({
        resolver: zodResolver(schema),
    });

    async function onSubmit(data: T) {
        try {
            switch (type) {
                case "sign-in":
                    const result = await signIn(
                        data as LocalCredentialsDTO
                    ).unwrap();
                    dispatch(setUser(result.user));
                    navigate("/");
                    break;
                case "sign-up":
                    const { confirmPassword, ...newUserData } =
                        data as LocalUserWithConfirm;
                    const result2 = await signUp(newUserData).unwrap();
                    console.log(result2);
                    navigate("/sign-in", {
                        state: result2,
                    });
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
                dispatch(setError(data));
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
