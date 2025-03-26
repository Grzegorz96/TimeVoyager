import styled from "styled-components";

export const List = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    width: 100%;
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
`;

export const Comment = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 5px;
    width: 100%;
    background-color: ${({ theme }) => `${theme.primary}60`};
    border-radius: 5px;
`;

export const TextField = styled.p<{
    $isCentered?: boolean;
}>`
    font-weight: bold;
    margin: ${({ $isCentered }) => $isCentered && "auto"};
`;

export const CommentText = styled.p`
    padding-inline: 5px;
    white-space: pre-wrap;
`;

export const UpperContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    padding: 5px;
`;

export const BottomContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    padding: 5px;
`;

export const LikeButton = styled.button<{ $isLikedByUser?: boolean }>`
    padding: 2px;
    cursor: pointer;
    color: ${({ theme, $isLikedByUser }) =>
        $isLikedByUser ? theme.textError : theme.textPrimary};
    background-color: transparent;
    border: none;
    font-size: 1rem;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;

export const BottomElement = styled.div`
    font-size: 0.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.textSecondary};
`;

export const Reply = styled.button`
    font-size: 0.8rem;
    font-weight: bold;
    color: ${({ theme }) => theme.textSecondary};
    cursor: pointer;
    background-color: transparent;
    border: none;

    &:disabled {
        opacity: 0.5;
        pointer-events: none;
    }
`;
