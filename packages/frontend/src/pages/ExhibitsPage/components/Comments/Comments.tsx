import { Overlay, Container, CommentsSection } from "./Comments.styles";
import Scene from "./Scene";
import { useLoaderData, useNavigate } from "react-router-dom";
import { type CommentsContent } from "@/pages/ExhibitsPage/types";
import { useGetExhibitCommentsQuery } from "@/services/api/exhibitsApiSlice";

export default function Comments() {
    const navigate = useNavigate();
    const commentsContent = useLoaderData() as CommentsContent & {
        exhibitId: string;
    };

    const { data: comments, error } = useGetExhibitCommentsQuery(
        commentsContent.exhibitId
    );
    console.log(error);
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
                    <div>
                        {comments?.data.map((comment) => (
                            <div key={comment._id}>
                                <p>{comment.text}</p>
                                <p>{comment.createdAt}</p>
                            </div>
                        ))}
                    </div>
                </CommentsSection>
            </Container>
        </Overlay>
    );
}
