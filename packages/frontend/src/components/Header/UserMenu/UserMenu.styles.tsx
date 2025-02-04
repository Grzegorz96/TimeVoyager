import styled from "styled-components";
import { navLinkStyles } from "@/utils/styles";

export const UserMenuContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SignOutButton = styled.button<{ $padding?: string }>`
    ${navLinkStyles}
`;
