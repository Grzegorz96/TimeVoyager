import styled from "styled-components";

export const ReadMoreOverlay = styled.div`
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme }) => theme.overlay};
    backdrop-filter: blur(2px);
    z-index: 200;
    overflow: hidden;
`;

export const ReadMoreContainer = styled.div`
    height: 90%;
    width: 90%;
    max-width: 800px;
    padding: 20px;
    background-color: ${({ theme }) => theme.primary};
    border-radius: 5px;
    box-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({ theme }) => theme.gradients.readMore};
`;

export const ReadMoreContent = styled.p`
    margin-bottom: 20px;
    font-size: 1.2rem;
    letter-spacing: 1px;
    text-align: justify;
`;

export const ReadMoreScrollContainer = styled.div`
    height: 100%;
    overflow-y: auto;
    border: 1px solid ${({ theme }) => theme.textPrimary};
`;

export const ReadMoreButton = styled.button`
    z-index: 50;
    padding: 10px 20px;
    background-color: ${({ theme }) => theme.accent};
    color: ${({ theme }) => theme.textPrimary};
    transition: color 0.25s ease-in-out;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    font-weight: 500;

    &:focus {
        outline: 3px solid #7066e099;
    }

    &:hover {
        background-color: #655cc9;
    }
`;
