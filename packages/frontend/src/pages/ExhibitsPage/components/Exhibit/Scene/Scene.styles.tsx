import styled from "styled-components";

export const SceneContainer = styled.div<{ $forComments?: boolean }>`
    width: ${({ $forComments }) => ($forComments ? "100%" : "600px")};
    height: ${({ $forComments }) => ($forComments ? "100%" : "500px")};

    flex: ${({ $forComments }) => $forComments && 2};
    background-color: transparent;
    position: relative;
    border: 1px solid ${({ theme }) => theme.textPrimary};

    &::before {
        content: ${({ $forComments }) => ($forComments ? "none" : "''")};
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
