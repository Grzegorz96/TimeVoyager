import { Overlay, CommentsContainer, CommentsSection } from "./Comments.styles";
import CommentsScene from "./CommentsScene";
import { useEffect } from "react";
import { type CommentsContent } from "@/pages/ExhibitsPage/types";

export default function Comments({
    commentsContent,
    setCommentsContent,
}: CommentsProps) {
    useEffect(() => {
        return () => {
            console.log("unmounting comments");
        };
    }, []);

    return (
        <Overlay onClick={() => setCommentsContent(null)}>
            <CommentsContainer onClick={(e) => e.stopPropagation()}>
                <CommentsScene
                    path={commentsContent.path}
                    key={commentsContent.path}
                />
                <CommentsSection>
                    <h2>{commentsContent.upperTitle}</h2>
                    <h1>{commentsContent.title}</h1>
                </CommentsSection>
            </CommentsContainer>
        </Overlay>
    );
}

type CommentsProps = {
    commentsContent: CommentsContent;
    setCommentsContent: React.Dispatch<
        React.SetStateAction<CommentsContent | null>
    >;
};
