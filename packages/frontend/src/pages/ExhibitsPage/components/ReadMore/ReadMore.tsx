import {
    Overlay,
    Container,
    LongDescription,
    ScrollContainer,
    Image,
    Button,
} from "./ReadMore.styles";
import { type ReadMoreConfig } from "@/pages/ExhibitsPage/types";
import { Path } from "@/utils/constants";
import { useLoaderData, useNavigate } from "react-router-dom";

export default function ReadMore() {
    const navigate = useNavigate();
    const readMoreConfig = useLoaderData() as ReadMoreConfig;

    return (
        <Overlay onClick={() => navigate("..")}>
            <Container onClick={(e) => e.stopPropagation()}>
                <LongDescription>
                    {readMoreConfig.longDescription}
                </LongDescription>
                <ScrollContainer>
                    {readMoreConfig.images.map((image, index) => (
                        <Image key={index} src={Path.IMAGES + image} />
                    ))}
                </ScrollContainer>
                <Button onClick={() => navigate("..")}>Close</Button>
            </Container>
        </Overlay>
    );
}
