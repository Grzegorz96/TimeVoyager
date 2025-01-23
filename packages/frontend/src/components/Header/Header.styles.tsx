import styled from "styled-components";
import { Link } from "react-router-dom";
import Headroom from "react-headroom";

export const StyledHeadroom = styled(Headroom)`
    .headroom--unfixed {
        transition: background-color 0.5s ease-in-out;
    }

    .headroom--pinned {
        background-color: ${({ theme }) => theme.primary};
    }
`;

export const HeaderContainer = styled.header`
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;
    padding: 10px;
`;

export const StyledLink = styled(Link)`
    margin-left: 15px;
    border-radius: 15px;
    height: 100%;
`;

export const StyledLogo = styled.img.attrs({
    src: "/src/assets/images/asd.png",
    alt: "logo",
})`
    border-radius: 15px;
    height: 100%;
`;
