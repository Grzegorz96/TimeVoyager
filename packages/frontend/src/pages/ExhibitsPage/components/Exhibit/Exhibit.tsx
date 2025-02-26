import {
    ExhibitWrapper,
    ExhibitCard,
    ContentContainer,
    UpperTitle,
    Title,
    ShortDescription,
    imageContainers,
} from "./Exhibit.styles";
import Scene from "./Scene";
import Actions from "./Actions";
import { type Exhibit } from "@/pages/ExhibitsPage/types";
import { memo } from "react";
import { Path } from "@/utils/constants";

function Exhibit({ index, exhibit, setLoadedModelsCount }: ExhibitProps) {
    const CurrentImageContainer =
        imageContainers[index % imageContainers.length];

    return (
        <ExhibitWrapper>
            <ExhibitCard $reverse={index % 2 === 0}>
                <Scene
                    modelPath={exhibit.modelPath}
                    setLoadedModelsCount={setLoadedModelsCount}
                />
                <ContentContainer>
                    <UpperTitle>{exhibit.content.upperTitle}</UpperTitle>
                    <Title>{exhibit.content.title}</Title>
                    <ShortDescription>
                        {exhibit.content.shortDescription}
                    </ShortDescription>
                    <Actions
                        exhibitId={exhibit.id}
                        exhibitStats={exhibit.stats}
                    />
                </ContentContainer>
            </ExhibitCard>
            <CurrentImageContainer>
                {exhibit.imageContainerImages.map((image, index) => (
                    <img key={index} src={Path.IMAGES + image} />
                ))}
            </CurrentImageContainer>
        </ExhibitWrapper>
    );
}

type ExhibitProps = {
    index: number;
    exhibit: Exhibit;
    setLoadedModelsCount: React.Dispatch<React.SetStateAction<number>>;
};

export default memo(Exhibit);
