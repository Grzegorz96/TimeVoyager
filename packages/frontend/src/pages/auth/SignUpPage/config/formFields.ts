import { LocalUserWithConfirmDTO } from "../schemas";

export const formFields: {
    name: keyof LocalUserWithConfirmDTO;
    type: string;
    placeholder: string;
}[] = [
    {
        name: "email",
        type: "email",
        placeholder: "Email",
    },
    {
        name: "username",
        type: "text",
        placeholder: "Username",
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password",
    },
    {
        name: "confirmPassword",
        type: "password",
        placeholder: "Confirm Password",
    },
];
