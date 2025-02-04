import styled from "styled-components";
import { NavLink as NL } from "react-router-dom";
import { navLinkStyles } from "@/utils/styles";

export const NavLink = styled(NL)<{ $padding?: string }>`
    ${navLinkStyles}

    &.active {
        box-shadow: 0 0 15px ${({ theme }) => `${theme.textPrimary}90`};
    }
`;
