import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { formatDistanceToNow } from "date-fns";
import {
    Container,
    UpperTitle,
    Title,
    List,
    Comment,
    UpperContainer,
    TextField,
    LikeButton,
    BottomContainer,
    BottomElement,
    Reply,
    Form,
    Input,
    Submit,
} from "./CommentsSection.styles";
import { type CommentsConfig } from "@/pages/ExhibitsPage/types";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { newExhibitCommentSchema } from "@timevoyager/shared";
import {
    useGetExhibitCommentsQuery,
    useAddExhibitCommentMutation,
} from "@/services/api";
import { useAppSelector } from "@/app";
import { z } from "zod";

const textValidation = newExhibitCommentSchema.pick({
    text: true,
});

type CommentText = z.infer<typeof textValidation>;

export default function CommentsSection({
    commentsConfig,
}: CommentsSectionProps) {
    const { user } = useAppSelector(({ auth }) => auth);
    const [addComment] = useAddExhibitCommentMutation();

    const { data: comments } = useGetExhibitCommentsQuery(
        commentsConfig.exhibitId
    );

    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid, isSubmitting },
    } = useForm<CommentText>({
        resolver: zodResolver(textValidation),
        mode: "onChange",
    });

    const onSubmit = async ({ text }: CommentText) => {
        try {
            const result = await addComment({
                text,
                exhibitId: commentsConfig.exhibitId,
            }).unwrap();
            console.log(result);
        } catch (error) {
            console.log("error");
        }

        reset();
    };

    return (
        <Container>
            <UpperTitle>{commentsConfig.upperTitle}</UpperTitle>
            <Title>{commentsConfig.title}</Title>

            <List>
                {comments?.data && comments.data.length > 0 ? (
                    comments.data.map((comment) => (
                        <Comment key={comment._id}>
                            <UpperContainer>
                                <TextField $fontWeight="bold">
                                    {comment.user.username}
                                </TextField>
                                <LikeButton
                                    disabled={!user}
                                    onClick={() => console.log("like")}
                                >
                                    <FontAwesomeIcon icon={faHeart} />
                                </LikeButton>
                            </UpperContainer>
                            <TextField $paddingInline="5px">
                                {comment.text}
                            </TextField>
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
                    <TextField $fontWeight="bold" $isCentered>
                        No comments yet. Be the first to comment!
                    </TextField>
                )}
            </List>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    disabled={!user}
                    id="commentInput"
                    placeholder={
                        !user
                            ? "Sign in to add a comment."
                            : "Write a comment..."
                    }
                    {...register("text")}
                />

                {user && (
                    <Submit type="submit" disabled={!isValid || isSubmitting}>
                        Post
                    </Submit>
                )}
            </Form>
        </Container>
    );
}

type CommentsSectionProps = {
    commentsConfig: CommentsConfig;
};
