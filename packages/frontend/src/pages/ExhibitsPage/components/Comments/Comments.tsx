import { Overlay, Container } from "./Comments.styles";
import Scene from "./Scene";
import CommentsSection from "./CommentsSection";
import { useLoaderData, useNavigate } from "react-router-dom";
import { type CommentsConfig } from "@/pages/ExhibitsPage/types";

export default function Comments() {
    const navigate = useNavigate();
    const commentsConfig = useLoaderData() as CommentsConfig;

    return (
        <Overlay onClick={() => navigate("..")}>
            <Container onClick={(e) => e.stopPropagation()}>
                <Scene
                    modelPath={commentsConfig.modelPath}
                    key={commentsConfig.modelPath}
                />
                <CommentsSection commentsConfig={commentsConfig} />
            </Container>
        </Overlay>
    );
}
