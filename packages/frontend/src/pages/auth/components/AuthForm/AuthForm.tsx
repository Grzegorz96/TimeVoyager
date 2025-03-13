import {
    Form,
    InputWrapper,
    InputLabel,
    Input,
    Submit,
    TextError,
    RootTextError,
    SubmitWrapper,
} from "./AuthForm.styles";
import { ZodSchema } from "zod";
import { type Path, get, useForm } from "react-hook-form";
import type { LocalCredentialsDTO, BaseResponse } from "@timevoyager/shared";
import { type LocalUserWithConfirm } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "@/app";
import { setNotification } from "@/states/notificationSlice";
import {
    useSignInMutation,
    useSignUpMutation,
    exhibitsApiSlice,
} from "@/services/api";
import { useNavigate } from "react-router-dom";
import { setAuthenticatedUser } from "@/states/authSlice";
import { showToast } from "@/components/ui";

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
                    const signInResult = await signIn(
                        data as LocalCredentialsDTO
                    ).unwrap();

                    showToast({
                        message: signInResult.message,
                        type: "success",
                    });

                    navigate("/");

                    setTimeout(() => {
                        dispatch(
                            dispatch(setAuthenticatedUser(signInResult.user))
                        );
                        dispatch(
                            exhibitsApiSlice.util.invalidateTags([
                                { type: "ExhibitsStats", id: "LIST" },
                            ])
                        );
                    }, 50);

                    break;
                case "sign-up":
                    const { confirmPassword, ...newUserData } =
                        data as LocalUserWithConfirm;
                    const signUpResult = await signUp(newUserData).unwrap();
                    navigate(
                        `/sign-in?message=${signUpResult.message}&status=${signUpResult.status}`
                    );
                    break;
                default:
                    const exhaustiveCheck: never = type;
                    console.error(exhaustiveCheck);
                    break;
            }
        } catch (err) {
            const error = err as BaseResponse;

            if (error.status === 409) {
                setFormError("email" as Path<T>, {
                    type: "manual",
                    message: "Email is already in use",
                });
            } else if (error.status >= 400 && error.status < 500) {
                setFormError("root", {
                    type: "manual",
                    message: error.message,
                });
            } else {
                dispatch(setNotification(error));
            }
        }
    }

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            {formFields.map((field) => (
                <InputWrapper key={field.name}>
                    <Input
                        id={field.name}
                        autoComplete="on"
                        type={field.type}
                        placeholder=" "
                        {...register(field.name)}
                    />
                    <InputLabel htmlFor={field.name}>
                        {field.placeholder}
                    </InputLabel>
                    {get(errors, field.name) && (
                        <TextError>
                            {(errors[field.name]?.message as string) ||
                                "Invalid input"}
                        </TextError>
                    )}
                </InputWrapper>
            ))}
            <SubmitWrapper>
                <Submit type="submit" disabled={isSubmitting}>
                    Submit
                </Submit>
                {errors.root && (
                    <RootTextError>{errors.root.message}</RootTextError>
                )}
            </SubmitWrapper>
        </Form>
    );
}
