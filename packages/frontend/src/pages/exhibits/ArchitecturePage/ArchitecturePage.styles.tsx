import styled from "styled-components";

export const ModelsContainer = styled.div`
    /* max-width: 1400px; */
    width: 100%;
    margin-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 300px;
    /* border: 1px solid white; */
`;

export const CanvasContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: transparent;
    background-color: ${({ theme }) => theme.primary};
    /* border: 1px solid white; */
    position: relative;

    &::before {
        content: "";
        position: absolute;
        aspect-ratio: 1.8;
        background: radial-gradient(
                40% 40% at 50% 50%,
                rgba(142, 177, 223, 0.24) 0,
                rgba(161, 155, 228, 0) 100%
            ),
            radial-gradient(
                40% 40% at 50% 50%,
                rgba(255, 134, 189, 0.14) 0,
                rgba(222, 141, 178, 0) 100%
            );
        background-repeat: no-repeat;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 300%;
        z-index: -1;
    }
`;

export const ModelCard = styled.div<{ $reverse?: boolean }>`
    /* border: 1px solid white; */
    display: flex;
    flex-direction: column;
    gap: 20px;
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "row")};
    justify-content: space-around;
`;

export const ContentContainer = styled.div<{ $reverse?: boolean }>`
    font-family: "Montserrat", "Segoe UI", sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: left;
`;

export const UpperTitle = styled.span`
    color: ${({ theme }) => theme.accent};
    font-size: 0.875rem;
    letter-spacing: 4px;
    line-height: 1.4;
    text-align: left;
    font-weight: 600;
    text-transform: uppercase;
`;

export const Title = styled.h2`
    text-transform: uppercase;
    font-size: 3rem;
    font-weight: 900;
    color: ${({ theme }) => theme.textPrimary};
`;

export const Decription = styled.p`
    font-size: 1rem;
    line-height: 1.5;
    color: ${({ theme }) => theme.textPrimary};
    margin-top: 10px;
    text-shadow: 0 0 10px ${({ theme }) => theme.textPrimary};
    max-width: 800px;
`;
