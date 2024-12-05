import { LocalCredentialsDTO } from "@timevoyager/shared";

export const formFields: {
    name: keyof LocalCredentialsDTO;
    type: string;
    placeholder: string;
}[] = [
    {
        name: "email",
        type: "email",
        placeholder: "Email",
    },
    {
        name: "password",
        type: "password",
        placeholder: "Password",
    },
];
