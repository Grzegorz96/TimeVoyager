import LoginForm from "./components/LoginForm";
import DiscordAuth from "./components/DiscordAuth";

export default function LoginPage() {
    return (
        <div>
            <h1>Login Page</h1>
            <LoginForm />
            <DiscordAuth />
        </div>
    );
}
