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
import { useGetExhibitCommentsQuery } from "@/services/api";
import { showToast } from "@/components/ui";
import { useEffect, useRef } from "react";

const textValidation = newExhibitCommentSchema.pick({
    text: true,
});

export default function CommentsSection({
    commentsConfig,
}: CommentsSectionProps) {
    const {
        data: comments,
        error,
        isError,
    } = useGetExhibitCommentsQuery(commentsConfig.exhibitId);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isValid, isSubmitting },
    } = useForm({
        resolver: zodResolver(textValidation),
        mode: "onChange",
    });

    const prevErrorRef = useRef<any>(null);

    useEffect(() => {
        console.log(`to jest porownanie`, error === prevErrorRef.current);
        if (isError && error && error !== prevErrorRef.current) {
            showToast({
                message: "Failed to fetch comments",
                type: "error",
            });

            prevErrorRef.current = error;
        }
    }, [isError]);

    const onSubmit = (data: any) => {
        console.log(`to jest data`, data);
        reset();
    };

    return (
        <Container>
            <UpperTitle>{commentsConfig.upperTitle}</UpperTitle>
            <Title>{commentsConfig.title}</Title>

            <List>
                {comments?.data.map((comment) => (
                    <Comment key={comment._id}>
                        <UpperContainer>
                            <TextField $fontWeight="bold">
                                {comment.user.username}
                            </TextField>
                            <LikeButton>
                                <FontAwesomeIcon icon={faHeart} />
                            </LikeButton>
                        </UpperContainer>
                        <TextField>{comment.text}</TextField>
                        <BottomContainer>
                            <BottomElement>
                                {formatDistanceToNow(comment.createdAt)}
                            </BottomElement>
                            <BottomElement>119 likes</BottomElement>
                            <Reply>Reply</Reply>
                        </BottomContainer>
                    </Comment>
                ))}
            </List>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    id="commentInput"
                    placeholder="Write a comment..."
                    {...register("text")}
                />
                <Submit type="submit" disabled={!isValid || isSubmitting}>
                    Post
                </Submit>
            </Form>
        </Container>
    );
}

type CommentsSectionProps = {
    commentsConfig: CommentsConfig;
};
