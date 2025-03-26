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

const textValidation = exhibitCommentSchema.pick({
    text: true,
});

type CommentText = z.infer<typeof textValidation>;

export default function CommentForm({
    exhibitId,
    listRef,
    user,
    isCommentsLoading,
    isCommentsError,
}: CommentFormProps) {
    const [addComment] = useAddExhibitCommentMutation();

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
    };

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
                        handleSubmit(onSubmit)();
                    }
                }}
                placeholder={
                    !user ? "Sign in to add a comment." : "Write a comment..."
                }
                {...register("text")}
            />

            {user && (
                <Submit
                    type="submit"
                    disabled={
                        !isValid ||
                        isSubmitting ||
                        isCommentsLoading ||
                        isCommentsError
                    }
                >
                    Post
                </Submit>
            )}
        </Form>
    );
}

type CommentFormProps = {
    exhibitId: ExhibitCommentDTO["exhibitId"];
    listRef: React.RefObject<HTMLDivElement>;
    user: AuthState["user"];
    isCommentsLoading: boolean;
    isCommentsError: boolean;
};
