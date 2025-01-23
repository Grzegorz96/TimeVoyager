import {
    HeaderContainer,
    StyledLink,
    StyledLogo,
    StyledHeadroom,
} from "./Header.styles";
import Navbar from "./Navbar";
import SettingsGear from "./SettingsGear";
import QuestMenu from "./QuestMenu";
import UserMenu from "./UserMenu";
import { useAppSelector } from "@/app";

export default function Header() {
    const user = useAppSelector(({ auth }) => auth.user);

    return (
        <StyledHeadroom
            style={{
                zIndex: 100,
            }}
        >
            <HeaderContainer>
                <StyledLink to="/">
                    <StyledLogo />
                </StyledLink>
                <Navbar />
                {user ? <UserMenu user={user} /> : <QuestMenu />}
                <SettingsGear />
            </HeaderContainer>
        </StyledHeadroom>
    );
}
