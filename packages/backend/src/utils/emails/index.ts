import { getTransporter } from "./transporter";
import { getEmailOptions } from "./emailOptions";

export const sendEmail = (
    type: "activation" | "reminder",
    recipientEmail: string,
    activationToken: string
) => {
    const transporter = getTransporter();
    const mailOptions = getEmailOptions(type, recipientEmail, activationToken);
    return transporter.sendMail(mailOptions);
};
