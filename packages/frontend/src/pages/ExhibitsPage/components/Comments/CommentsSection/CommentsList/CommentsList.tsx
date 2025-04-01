import { List, ErrorText } from "./CommentsList.styles";
import { type AuthState } from "@/types/AuthState";
import type {
    ExhibitCommentsResponse,
    ExhibitCommentDTO,
} from "@timevoyager/shared";
import { Loader } from "@/components/ui";
import {
    useAddExhibitCommentLikeMutation,
    useDeleteExhibitCommentLikeMutation,
} from "@/services/api";
import Comment from "./Comment";

export default function CommentsList({
    comments,
    listRef,
    setReplyData,
    user,
    isCommentsLoading,
    isCommentsError,
}: CommentsListProps) {
    const [addCommentLike] = useAddExhibitCommentLikeMutation();
    const [deleteCommentLike] = useDeleteExhibitCommentLikeMutation();

    return (
        <List ref={listRef}>
            {isCommentsLoading ? (
                <Loader />
            ) : isCommentsError ? (
                <ErrorText>
                    Failed to load comments. Please try again later.
                </ErrorText>
            ) : comments?.data && comments.data.length > 0 ? (
                comments.data.map((comment) => (
                    <Comment
                        key={comment._id}
                        comment={comment}
                        user={user}
                        setReplyData={setReplyData}
                        addCommentLike={addCommentLike}
                        deleteCommentLike={deleteCommentLike}
                    />
                ))
            ) : (
                <ErrorText>No comments yet. Be the first to comment!</ErrorText>
            )}
        </List>
    );
}

type CommentsListProps = {
    comments: ExhibitCommentsResponse | undefined;
    listRef: React.RefObject<HTMLDivElement>;
    setReplyData: React.Dispatch<
        React.SetStateAction<{
            _id: ExhibitCommentDTO["_id"];
            username: ExhibitCommentDTO["author"]["username"];
        } | null>
    >;
    user: AuthState["user"];
    isCommentsLoading: boolean;
    isCommentsError: boolean;
};
