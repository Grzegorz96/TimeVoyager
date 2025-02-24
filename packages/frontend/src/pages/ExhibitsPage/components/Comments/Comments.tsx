import { Overlay, Container, CommentsSection } from "./Comments.styles";
import Scene from "./Scene";
import { useLoaderData, useNavigate } from "react-router-dom";
import { type CommentsContent } from "@/pages/ExhibitsPage/types";

export default function Comments() {
    const navigate = useNavigate();
    const commentsContent = useLoaderData() as CommentsContent;

    return (
        <Overlay onClick={() => navigate("..")}>
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
