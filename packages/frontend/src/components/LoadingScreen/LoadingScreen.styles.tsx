import { overlayStyles } from "@/utils/styles";
import styled from "styled-components";

export const Container = styled.div`
    ${overlayStyles}

    background-color: ${({ theme }) => theme.primary};
`;

export const Text = styled.div`
    font-size: 1.2rem;
    color: ${({ theme }) => theme.textPrimary};
`;
