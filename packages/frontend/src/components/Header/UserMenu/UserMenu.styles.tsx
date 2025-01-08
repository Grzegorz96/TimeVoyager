import styled from "styled-components";
import { sharedNavLinkStyles } from "@/utils/styles";

export const UserMenuContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const StyledSignOutButton = styled.button<{ $padding?: string }>`
    ${sharedNavLinkStyles}
`;
