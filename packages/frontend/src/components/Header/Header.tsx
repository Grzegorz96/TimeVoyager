import { Container, Link, Logo, Headroom } from "./Header.styles";
import Navbar from "./Navbar";
import SettingsGear from "./SettingsGear";
import QuestMenu from "./QuestMenu";
import UserMenu from "./UserMenu";
import { useAppSelector } from "@/app";

export default function Header() {
    const user = useAppSelector(({ auth }) => auth.user);

    return (
        <Headroom>
            <Container>
                <Link to="/">
                    <Logo />
                </Link>
                <Navbar />
                {user ? <UserMenu user={user} /> : <QuestMenu />}
                <SettingsGear />
            </Container>
        </Headroom>
    );
}
