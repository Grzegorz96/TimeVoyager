import { env } from "@/utils/constants";
import { getReminderEmailHTML, getActivationEmailHTML } from "./emailTemplates";

export const getEmailOptions = (
    type: "activation" | "reminder",
    recipientEmail: string,
    activationToken: string
) => {
    let subject, text, html;

    switch (type) {
        case "activation":
            subject = "Account activation";
            text = `Click the link below to activate your account. Please note that this activation link will expire in ${
                env.EXPIRATION_ACCOUNT_TIME / 60000
            } minutes. 
                
                ${env.ACTIVATION_ACCOUNT_URL}/${activationToken}
                
                If you did not request this, please ignore this email.`;
            html = getActivationEmailHTML(activationToken);
            break;
        case "reminder":
            subject = "Account activation reminder";
            text = `Your account has not been activated yet, and it will be deleted in ${
                (env.EXPIRATION_ACCOUNT_TIME -
                    env.REMINDER_EXPIRATION_ACCOUNT_TIME) /
                60000
            } minutes. To avoid account deletion, please activate your account by clicking the link below:

            ${env.ACTIVATION_ACCOUNT_URL}/${activationToken}

            If you did not request this, please ignore this email.`;
            html = getReminderEmailHTML(activationToken);
            break;
        default:
            const _exhaustiveCheck: never = type;
    }
    return {
        from: {
            name: "TimeVoyager",
            address: env.EMAIL_SENDER_USER,
        },
        to: recipientEmail,
        subject,
        text,
        html,
    };
};
