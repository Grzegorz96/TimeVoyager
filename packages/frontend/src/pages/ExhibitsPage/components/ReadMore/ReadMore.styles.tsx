import styled from "styled-components";

export const Overlay = styled.div`
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
    gap: 30px;
    flex-direction: column;
    justify-content: space-between;
    background-image: ${({ theme }) => theme.gradients.readMore};
`;

export const ReadMoreLongDescription = styled.p`
    font-family: ${({ theme }) => theme.fontFamilyMontserrat};
    font-size: 1.2rem;
    text-align: justify;
    overflow-y: auto;

    &::-webkit-scrollbar {
        width: 20px;
    }

    &::-webkit-scrollbar-thumb {
        background-clip: content-box;
        border-left: 10px solid transparent;
        background-color: ${({ theme }) => theme.accent};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;

export const ReadMoreScrollContainer = styled.div`
    overflow-x: scroll;
    overflow-y: hidden;
    display: flex;
    gap: 20px;
    padding-bottom: 20px;

    &::-webkit-scrollbar {
        height: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.accent};
    }

    &::-webkit-scrollbar-track {
        background-color: transparent;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: ${({ theme }) => theme.accentDark};
    }
`;

export const ReadMoreImage = styled.img`
    width: 300px;
    aspect-ratio: 6/8;
    object-fit: cover;
    border-radius: 10px;
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
