import LoginFormComponent from "./LoginForm/LoginForm";
import DiscordAuthComponent from "./DiscordAuth/DiscordAuth";

export default function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginFormComponent />
            <DiscordAuthComponent />
        </div>
    );
}
