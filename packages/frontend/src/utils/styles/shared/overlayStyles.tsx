import { css } from "styled-components";

export const overlayStyles = css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 1rem;
    color: ${({ theme }) => theme.textPrimary};
`;
