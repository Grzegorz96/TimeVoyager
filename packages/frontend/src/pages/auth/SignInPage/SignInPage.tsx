import SignInForm from "./components/SignInForm";
import DiscordAuth from "./components/DiscordAuth";

export default function SignInPage() {
    return (
        <div>
            <h1>Sign in Page</h1>
            <SignInForm />
            <DiscordAuth />
        </div>
    );
}
