import { HeaderContainer, StyledLink, StyledLogo } from "./Header.styles";
import Navbar from "./Navbar";
import SettingsGear from "./SettingsGear";
import QuestMenu from "./QuestMenu";
import UserMenu from "./UserMenu";
import { useAppSelector } from "@/app";

export default function Header() {
    const user = useAppSelector(({ auth }) => auth.user);

    return (
        <HeaderContainer>
            <StyledLink to="/">
                <StyledLogo />
            </StyledLink>
            <Navbar />
            {user ? <UserMenu user={user} /> : <QuestMenu />}
            <SettingsGear />
        </HeaderContainer>
    );
}
