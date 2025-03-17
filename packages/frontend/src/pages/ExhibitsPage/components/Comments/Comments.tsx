import { Overlay, Container } from "./Comments.styles";
import Scene from "./Scene";
import CommentsSection from "./CommentsSection";
import { useLoaderData, useNavigate } from "react-router-dom";
import { type CommentsConfig } from "@/pages/ExhibitsPage/types";
import { useScrollLockControl } from "@/hooks";

export default function Comments() {
    useScrollLockControl();

    const navigate = useNavigate();
    const commentsConfig = useLoaderData() as CommentsConfig;

    return (
        <Overlay
            onClick={() =>
                navigate("..", {
                    preventScrollReset: true,
                })
            }
        >
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
