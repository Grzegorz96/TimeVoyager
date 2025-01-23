import styled from "styled-components";

export const ModelsContainer = styled.div`
    /* max-width: 1400px; */
    width: 100%;
    margin-block: 50px;
    display: flex;
    flex-direction: column;
    gap: 200px;
    border: 1px solid white;
`;

export const CanvasContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: transparent;
    /* background-color: ${({ theme }) => theme.primary}; */
    border: 1px solid white;
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
    border: 1px solid white;
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

export const TestContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 200px;
`;

export const ImageContainer1 = styled.div`
    width: 100%;
    height: 400px;
    background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;

    &:hover {
        img:nth-child(1) {
            transform: translateX(-100%);
        }

        img:nth-child(2) {
            transform: scale(1.05);
        }

        img:nth-child(3) {
            transform: translateX(100%);
        }
    }

    img {
        object-fit: cover;
        border-radius: 25px;
        box-shadow: 0 8px 24px rgba(17, 17, 26, 0.1),
            0 16px 56px rgba(17, 17, 26, 0.1), 0 24px 80px rgba(17, 17, 26, 0.1);
        transition: all 0.3s ease-in-out;

        &:nth-child(1) {
            width: 300px;
            height: 410px;
            position: absolute;
            transform: translateX(-40%);
        }
        &:nth-child(2) {
            height: 480px;
            width: 350px;
            position: absolute;
            z-index: 1;
        }
        &:nth-child(3) {
            width: 300px;
            height: 410px;
            position: absolute;
            transform: translateX(40%);
        }
    }
`;

export const ImageContainer2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: pink;
    position: relative;

    &:hover {
        img:first-child {
            transform: scale(1);
        }

        img:last-child {
            box-shadow: none;
        }
    }

    img {
        position: absolute;
        transition: all 0.3s ease-in-out;
        border-radius: 25px;

        &:first-child {
            height: 480px;
            transform: scale(0.7);
        }

        &:last-child {
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            height: 480px;
            z-index: 1;
        }
    }
`;

export const ImageContainer3 = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 400px;
    background-color: lightblue;
    position: relative;

    &:hover {
        img:first-child {
            transform: translate(-30%, -20%);
        }

        img:last-child {
            transform: translate(30%, 20%);
            box-shadow: none;
        }
    }

    img {
        position: absolute;
        transition: all 0.3s ease-in-out;
        border-radius: 25px;
        object-fit: cover;

        &:first-child {
            transform: translate(-20%, -10%);
            height: 480px;
            width: 480px;
        }

        &:last-child {
            transform: translate(20%, 10%);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
            width: 480px;
            height: 480px;
        }
    }
`;
