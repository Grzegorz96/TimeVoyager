import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import {
    List,
    Comment,
    TextField,
    CommentText,
    UpperContainer,
    BottomContainer,
    BottomElement,
    LikeButton,
    Reply,
} from "./CommentsList.styles";
import { type AuthState } from "@/types/AuthState";
import { type ExhibitCommentsResponse } from "@timevoyager/shared";
import { Loader } from "@/components/ui";
import {
    useAddExhibitCommentLikeMutation,
    useDeleteExhibitCommentLikeMutation,
} from "@/services/api";

export default function CommentsList({
    comments,
    listRef,
    user,
    isCommentsLoading,
    isCommentsError,
}: CommentsListProps) {
    const [addCommentLike] = useAddExhibitCommentLikeMutation();
    const [deleteCommentLike] = useDeleteExhibitCommentLikeMutation();
    console.log(comments);
    return (
        <List ref={listRef}>
            {isCommentsLoading ? (
                <Loader />
            ) : isCommentsError ? (
                <TextField $isCentered>
                    Failed to load comments. Please try again later.
                </TextField>
            ) : comments?.data && comments.data.length > 0 ? (
                comments.data.map((comment) => (
                    <Comment key={comment._id}>
                        <UpperContainer>
                            <TextField>{comment.author.username}</TextField>
                            <LikeButton
                                disabled={!user}
                                $isLikedByUser={comment.isLikedByUser}
                                onClick={() => {
                                    if (comment.isLikedByUser === undefined) {
                                        return;
                                    } else if (comment.isLikedByUser) {
                                        deleteCommentLike({
                                            _id: comment._id,
                                            exhibitId: comment.exhibitId,
                                        });
                                    } else {
                                        addCommentLike({
                                            _id: comment._id,
                                            exhibitId: comment.exhibitId,
                                        });
                                    }
                                }}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </LikeButton>
                        </UpperContainer>
                        <CommentText>{comment.text}</CommentText>
                        <BottomContainer>
                            <BottomElement>
                                {formatDistanceToNow(comment.createdAt)}
                            </BottomElement>
                            {comment.likesCount > 0 && (
                                <BottomElement>
                                    {`${comment.likesCount} likes`}
                                </BottomElement>
                            )}
                            <Reply
                                disabled={!user}
                                onClick={() => console.log("reply")}
                            >
                                Reply
                            </Reply>
                        </BottomContainer>
                    </Comment>
                ))
            ) : (
                <TextField $isCentered>
                    No comments yet. Be the first to comment!
                </TextField>
            )}
        </List>
    );
}

type CommentsListProps = {
    comments: ExhibitCommentsResponse | undefined;
    listRef: React.RefObject<HTMLDivElement>;
    user: AuthState["user"];
    isCommentsLoading: boolean;
    isCommentsError: boolean;
};
