import { useAuthForm } from "@/hooks";
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
import {
    type Path,
    // type SubmitHandler,
    // type FieldValues,
    get,
} from "react-hook-form";
import { useSignInMutation, useSignUpMutation } from "@/services/api";
import { type LocalCredentialsDTO } from "@timevoyager/shared";
import {
    // type ErrorResponse,
    type LocalUserWithConfirm,
    // errorResponseSchema,
    // localUserWithConfirmSchema,
} from "@/schemas";
// import { useAppDispatch } from "@/app";
// import { setError as sE } from "@/states/errorDataSlice";

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
    const { register, handleSubmit, isSubmitting, errors, setError } =
        useAuthForm<T>({
            schema,
            onSubmit,
        });
    const [signIn, { error: signInError }] = useSignInMutation();
    const [signUp, { error: signUpError }] = useSignUpMutation();

    async function onSubmit(data: T) {
        try {
            const result = await signIn(data);
            console.log(result);
        } catch (error: unknown) {
            console.log(error);
        }

        // dispatch(sE("jakisblad"));
        // switch (type) {
        //     case "sign-in": {
        //         try {
        //             const result = await signIn(data).unwrap();
        //         } catch (error: unknown) {
        //             console.log(error);
        //             try {
        //                 const parsedError = errorDataSchema.parse(error);
        //                 if (parsedError.status === 401) {
        //                     setError("root", {
        //                         type: "manual",
        //                         message: parsedError.data.message,
        //                     });
        //                 } else {
        //                     setError("root", {
        //                         type: "manual",
        //                         message: "An error occurred",
        //                     });
        //                 }
        //             } catch (error: unknown) {
        //                 console.log(error);
        //             }
        //         }
        //         break;
        //     }
        //     case "sign-up":
        //         console.log("sign-up");
        //         break;
        //     default:
        //         const _exhaustiveCheck: never = type;
        //         throw new Error(`Unhandled type: ${_exhaustiveCheck}`);
        // }
    }

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
