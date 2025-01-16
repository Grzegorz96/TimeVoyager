import styled from "styled-components";
import { sharedNavLinkStyles } from "@/components/ui";

export const UserMenuContainer = styled.div`
    display: flex;
    gap: 1rem;
`;

export const SignOutButton = styled.button<{ $padding?: string }>`
    ${sharedNavLinkStyles}
`;
