import { type LocalUserWithConfirm } from "@/schemas";

export const formFields: {
    name: keyof LocalUserWithConfirm;
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
