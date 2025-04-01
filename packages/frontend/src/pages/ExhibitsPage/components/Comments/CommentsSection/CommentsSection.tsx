import { Container, UpperTitle, Title } from "./CommentsSection.styles";
import { type CommentsConfig } from "@/pages/ExhibitsPage/types";
import { useGetExhibitCommentsQuery } from "@/services/api";
import { useAppSelector } from "@/app";
import { useRef, useState } from "react";
import CommentForm from "./CommentForm";
import CommentsList from "./CommentsList";
import { type ExhibitCommentDTO } from "@timevoyager/shared";

export default function CommentsSection({
    commentsConfig,
}: CommentsSectionProps) {
    const [replyData, setReplyData] = useState<{
        _id: ExhibitCommentDTO["_id"];
        username: ExhibitCommentDTO["author"]["username"];
    } | null>(null);

    const listRef = useRef<HTMLDivElement>(null);
    const user = useAppSelector(({ auth }) => auth.user);
    const {
        data: comments,
        isLoading: isCommentsLoading,
        isError: isCommentsError,
    } = useGetExhibitCommentsQuery(commentsConfig.exhibitId);

    return (
        <Container>
            <UpperTitle>{commentsConfig.upperTitle}</UpperTitle>
            <Title>{commentsConfig.title}</Title>
            <CommentsList
                comments={comments}
                listRef={listRef}
                setReplyData={setReplyData}
                user={user}
                isCommentsLoading={isCommentsLoading}
                isCommentsError={isCommentsError}
            />
            <CommentForm
                exhibitId={commentsConfig.exhibitId}
                listRef={listRef}
                replyData={replyData}
                setReplyData={setReplyData}
                user={user}
                isCommentsLoading={isCommentsLoading}
                isCommentsError={isCommentsError}
            />
        </Container>
    );
}

type CommentsSectionProps = {
    commentsConfig: CommentsConfig;
};
