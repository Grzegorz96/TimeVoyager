import {
    ExhibitWrapper,
    ExhibitCard,
    ContentContainer,
    UpperTitle,
    Title,
    ShortDescription,
    ImageContainer1,
    ImageContainer2,
    ImageContainer3,
} from "./Exhibit.styles";
import Scene from "../Scene";
import Actions from "../Actions";
import type { ExhibitConfig } from "../../types";
import { memo } from "react";

const imageContainers = [ImageContainer1, ImageContainer2, ImageContainer3];

function Exhibit({
    index,
    exhibit,
    onModelLoaded,
    setReadMoreContent,
}: ExhibitProps) {
    const CurrentImageContainer =
        imageContainers[index % imageContainers.length];
    console.log("Exhibit");
    return (
        <ExhibitWrapper>
            <ExhibitCard $reverse={index % 2 === 0}>
                <Scene
                    modelConfig={exhibit.modelConfig}
                    onModelLoaded={onModelLoaded}
                />
                <ContentContainer>
                    <UpperTitle>{exhibit.content.upperTitle}</UpperTitle>
                    <Title>{exhibit.content.title}</Title>
                    <ShortDescription>
                        {exhibit.content.shortDescription}
                    </ShortDescription>
                    <Actions
                        longDescription={exhibit.content.longDescription}
                        images={exhibit.images}
                        setReadMoreContent={setReadMoreContent}
                    />
                </ContentContainer>
            </ExhibitCard>
            <CurrentImageContainer>
                {exhibit.imageContainerImages.map((image, index) => (
                    <img key={index} src={image} />
                ))}
            </CurrentImageContainer>
        </ExhibitWrapper>
    );
}

type ExhibitProps = {
    index: number;
    exhibit: ExhibitConfig;
    onModelLoaded: () => void;
    setReadMoreContent: () => void;
};

export default memo(Exhibit);
