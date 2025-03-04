import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    newExhibitCommentSchema,
    type ExhibitCommentDTO,
} from "@timevoyager/shared";
import { useAddExhibitCommentMutation } from "@/services/api";
import { Form, Input, Submit } from "./CommentForm.styles";
import { type AuthState } from "@/types/AuthState";

const textValidation = newExhibitCommentSchema.pick({
    text: true,
});

type CommentText = z.infer<typeof textValidation>;

export default function CommentForm({
    exhibitId,
    listRef,
    user,
    isLoadingComments,
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
                disabled={!user || isSubmitting || isLoadingComments}
                onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                        e.preventDefault();
                        handleSubmit(onSubmit)();
                    }
                }}
                id="commentInput"
                placeholder={
                    !user ? "Sign in to add a comment." : "Write a comment..."
                }
                {...register("text")}
            />

            {user && (
                <Submit
                    type="submit"
                    disabled={!isValid || isSubmitting || isLoadingComments}
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
    isLoadingComments: boolean;
};
