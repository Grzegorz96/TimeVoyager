import styled from "styled-components";

export const GradientWrapper = styled.div<{ $pathname: string }>`
    width: 100%;
    min-height: 100vh;
    overflow-x: hidden;
    background-image: ${({ theme: { gradients }, $pathname }) =>
        gradients[$pathname as keyof typeof gradients] || null};
`;

// "radial-gradient(ellipse 70% 70% at 100% 100%, #c870da42, #e877af00)"};
