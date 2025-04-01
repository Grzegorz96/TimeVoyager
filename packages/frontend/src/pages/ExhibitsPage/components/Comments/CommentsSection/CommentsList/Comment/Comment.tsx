import {
    CommentWrapper,
    UpperContainer,
    AuthorText,
    CommentText,
    BottomContainer,
    LikeButton,
    BottomElement,
    Reply,
} from "./Comment.styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { formatDistanceToNow } from "date-fns";
import { type AuthState } from "@/types/AuthState";
import { type ExhibitCommentDTO } from "@timevoyager/shared";
import {
    useDeleteExhibitCommentLikeMutation,
    useAddExhibitCommentLikeMutation,
} from "@/services/api";

export default function Comment({
    comment: { _id, exhibitId, ...comment },
    user,
    setReplyData,
    addCommentLike,
    deleteCommentLike,
}: CommentProps) {
    return (
        <CommentWrapper key={_id}>
            <UpperContainer>
                <AuthorText>{comment.author.username}</AuthorText>
                <LikeButton
                    disabled={!user}
                    $isLikedByUser={comment.isLikedByUser}
                    onClick={() => {
                        if (comment.isLikedByUser === undefined) {
                            return;
                        } else if (comment.isLikedByUser) {
                            deleteCommentLike({
                                _id,
                                exhibitId,
                            });
                        } else {
                            addCommentLike({
                                _id,
                                exhibitId,
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
                    onClick={() => {
                        setReplyData({
                            _id,
                            username: comment.author.username,
                        });
                    }}
                >
                    Reply
                </Reply>
            </BottomContainer>
        </CommentWrapper>
    );
}

type CommentProps = {
    comment: ExhibitCommentDTO;
    user: AuthState["user"];
    setReplyData: React.Dispatch<
        React.SetStateAction<{
            _id: ExhibitCommentDTO["_id"];
            username: ExhibitCommentDTO["author"]["username"];
        } | null>
    >;
    addCommentLike: ReturnType<typeof useAddExhibitCommentLikeMutation>[0];
    deleteCommentLike: ReturnType<
        typeof useDeleteExhibitCommentLikeMutation
    >[0];
};
