import { env } from "@/utils/constants";

const buttonStyle = `
        .button {
            background-color: #4CAF50; 
            border: none;
            color: white;
            padding: 15px 32px;
            text-align: center;
            text-decoration: none;
            display: inline-block;
            font-size: 16px;
            margin: 4px 2px;
            cursor: pointer;
            border-radius: 12px; 
            transition: background-color 0.3s;
        }
        .button:hover {
            background-color: #45a049;
        }
    `;

export const getActivationEmailHTML = (activationToken: string) => `
<html>
    <head><style>${buttonStyle}</style></head>
    <body>
        <h3>Welcome to TimeVoyager!</h3>
        <p>Click the button below to activate your account. Please note that this activation link will expire in ${
            env.EXPIRATION_ACCOUNT_TIME / 60000
        } minutes:</p>
        <a href="${
            env.ACTIVATION_ACCOUNT_URL
        }/${activationToken}" class="button">Activate Account</a>
        <p>If you did not request this, please ignore this email.</p>
    </body>
</html>
`;

export const getReminderEmailHTML = (activationToken: string) => `
<html>
    <head><style>${buttonStyle}</style></head>
    <body>
        <h3>Your TimeVoyager account is about to expire!</h3>
        <p>Your account has not been activated yet, and it will be deleted in ${
            (env.EXPIRATION_ACCOUNT_TIME -
                env.REMINDER_EXPIRATION_ACCOUNT_TIME) /
            60000
        } minutes. To avoid account deletion, please activate your account by clicking the button below:</p>
        <a href="${
            env.ACTIVATION_ACCOUNT_URL
        }/${activationToken}" class="button">Activate Account</a>
        <p>If you did not request this, please ignore this email.</p>
    </body>
</html>
`;
