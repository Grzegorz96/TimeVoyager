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
import Loader from "./Loader";

export default function CommentsList({
    comments,
    listRef,
    user,
    isLoadingComments,
}: CommentsListProps) {
    return (
        <List ref={listRef}>
            {isLoadingComments ? (
                <Loader />
            ) : comments?.data && comments.data.length > 0 ? (
                comments.data.map((comment) => (
                    <Comment key={comment._id}>
                        <UpperContainer>
                            <TextField>{comment.user.username}</TextField>
                            <LikeButton
                                disabled={!user}
                                onClick={() => console.log("like")}
                            >
                                <FontAwesomeIcon icon={faHeart} />
                            </LikeButton>
                        </UpperContainer>
                        <CommentText>{comment.text}</CommentText>
                        <BottomContainer>
                            <BottomElement>
                                {formatDistanceToNow(comment.createdAt)}
                            </BottomElement>
                            <BottomElement>119 likes</BottomElement>
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
    isLoadingComments: boolean;
};
