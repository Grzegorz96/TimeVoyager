import { Overlay, Container, CommentsSection } from "./Comments.styles";
import Scene from "./Scene";
import {
    setCommentsContent,
    type ExhibitsPageAction,
} from "@/pages/ExhibitsPage/states";
import { type CommentsContent } from "@/pages/ExhibitsPage/types";

export default function Comments({ commentsContent, dispatch }: CommentsProps) {
    return (
        <Overlay onClick={() => dispatch(setCommentsContent(null))}>
            <Container onClick={(e) => e.stopPropagation()}>
                <Scene
                    modelPath={commentsContent.modelPath}
                    key={commentsContent.modelPath}
                />
                <CommentsSection>
                    <h2>{commentsContent.upperTitle}</h2>
                    <h1>{commentsContent.title}</h1>
                </CommentsSection>
            </Container>
        </Overlay>
    );
}

type CommentsProps = {
    commentsContent: CommentsContent;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};
