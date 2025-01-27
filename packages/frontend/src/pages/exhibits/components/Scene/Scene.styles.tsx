import styled from "styled-components";

export const SceneContainer = styled.div`
    width: 500px;
    height: 500px;
    background-color: transparent;
    /* background-color: ${({ theme }) => theme.primary}; */
    position: relative;
    border: 1px solid ${({ theme }) => theme.textPrimary};

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
