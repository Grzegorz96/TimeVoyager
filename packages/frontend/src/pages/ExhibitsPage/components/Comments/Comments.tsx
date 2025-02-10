import { Overlay, CommentsContainer, CommentsSection } from "./Comments.styles";
import SceneForComment from "./SceneForComment";

export default function Comments({
    commentsContent,
    setCommentsContent,
}: CommentsProps) {
    console.log("commentsContent", commentsContent);
    return (
        <Overlay onClick={() => setCommentsContent(null)}>
            <CommentsContainer onClick={(e) => e.stopPropagation()}>
                <SceneForComment path={commentsContent.modelConfig.path} />
                <CommentsSection>
                    <h2>{commentsContent.upperTitle}</h2>
                    <h1>{commentsContent.title}</h1>
                </CommentsSection>
            </CommentsContainer>
        </Overlay>
    );
}

type CommentsProps = {
    commentsContent: any;
    setCommentsContent: React.Dispatch<any>;
};
