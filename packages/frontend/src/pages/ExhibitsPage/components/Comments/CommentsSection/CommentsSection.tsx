import { Container, UpperTitle, Title } from "./CommentsSection.styles";
import { type CommentsConfig } from "@/pages/ExhibitsPage/types";
import { useGetExhibitCommentsQuery } from "@/services/api";
import { useAppSelector } from "@/app";
import { useRef } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";

export default function CommentsSection({
    commentsConfig,
}: CommentsSectionProps) {
    const listRef = useRef<HTMLDivElement>(null);
    const user = useAppSelector(({ auth }) => auth.user);
    const { data: comments, isLoading: isLoadingComments } =
        useGetExhibitCommentsQuery(commentsConfig.exhibitId);

    return (
        <Container>
            <UpperTitle>{commentsConfig.upperTitle}</UpperTitle>
            <Title>{commentsConfig.title}</Title>
            <CommentsList
                comments={comments}
                listRef={listRef}
                user={user}
                isLoadingComments={isLoadingComments}
            />
            <CommentForm
                exhibitId={commentsConfig.exhibitId}
                listRef={listRef}
                user={user}
                isLoadingComments={isLoadingComments}
            />
        </Container>
    );
}

type CommentsSectionProps = {
    commentsConfig: CommentsConfig;
};
