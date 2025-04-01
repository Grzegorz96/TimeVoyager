import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    exhibitCommentSchema,
    type ExhibitCommentDTO,
} from "@timevoyager/shared";
import { useAddExhibitCommentMutation } from "@/services/api";
import { Form, Input, Submit } from "./CommentForm.styles";
import { type AuthState } from "@/types/AuthState";
import { useEffect } from "react";

const textValidation = exhibitCommentSchema.pick({
    text: true,
});

type CommentText = z.infer<typeof textValidation>;

export default function CommentForm({
    exhibitId,
    listRef,
    replyData,
    setReplyData,
    user,
    isCommentsLoading,
    isCommentsError,
}: CommentFormProps) {
    const [addComment] = useAddExhibitCommentMutation();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        setFocus,
        watch,
        formState: { isValid, isSubmitting },
    } = useForm<CommentText>({
        resolver: zodResolver(textValidation),
        mode: "onChange",
    });
    console.log(1);
    useEffect(() => {
        if (replyData) {
            setValue("text", `@${replyData.username} `, {
                // shouldValidate: true,
            });
            setFocus("text");
        }
    }, [replyData, reset]);

    const onSubmit = async ({ text }: CommentText) => {
        if (replyData) {
            reset();
            setReplyData(null);
        } else {
            const response = await addComment({
                exhibitId,
                text,
            });
            if (!response.error) {
                listRef.current?.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
                reset();
            }
        }
    };

    const isSubmitDisabled =
        !isValid ||
        isSubmitting ||
        isCommentsLoading ||
        isCommentsError ||
        (!!replyData && watch("text") === `@${replyData.username} `);

    return (
        <Form onSubmit={handleSubmit(onSubmit)}>
            <Input
                id="commentInput"
                disabled={
                    !user ||
                    isSubmitting ||
                    isCommentsLoading ||
                    isCommentsError
                }
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        if (!isSubmitDisabled) handleSubmit(onSubmit)();
                    }
                }}
                placeholder={
                    !user ? "Sign in to add a comment." : "Write a comment..."
                }
                {...register("text")}
            />

            {user && (
                <Submit type="submit" disabled={isSubmitDisabled}>
                    Post
                </Submit>
            )}
        </Form>
    );
}

type CommentFormProps = {
    exhibitId: ExhibitCommentDTO["exhibitId"];
    listRef: React.RefObject<HTMLDivElement>;
    replyData: {
        _id: ExhibitCommentDTO["_id"];
        username: ExhibitCommentDTO["author"]["username"];
    } | null;
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
