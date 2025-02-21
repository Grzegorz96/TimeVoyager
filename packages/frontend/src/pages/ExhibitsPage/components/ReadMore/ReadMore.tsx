import {
    Overlay,
    Container,
    LongDescription,
    ScrollContainer,
    Image,
    Button,
} from "./ReadMore.styles";
import {
    setReadMoreContent,
    type ExhibitsPageAction,
} from "@/pages/ExhibitsPage/states";
import { type ReadMoreContent } from "@/pages/ExhibitsPage/types";
import { Path } from "@/utils";

export default function ReadMore({ readMoreContent, dispatch }: ReadMoreProps) {
    return (
        <Overlay onClick={() => dispatch(setReadMoreContent(null))}>
            <Container onClick={(e) => e.stopPropagation()}>
                <LongDescription>
                    {readMoreContent.longDescription}
                </LongDescription>
                <ScrollContainer>
                    {readMoreContent.images.map((image, index) => (
                        <Image key={index} src={Path.IMAGES + image} />
                    ))}
                </ScrollContainer>
                <Button onClick={() => dispatch(setReadMoreContent(null))}>
                    Close
                </Button>
            </Container>
        </Overlay>
    );
}

type ReadMoreProps = {
    readMoreContent: ReadMoreContent;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};
