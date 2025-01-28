import Scene from "./components/Scene";
import * as THREE from "three";
import { type PageConfig } from "./config";
import {
    ModelsContainer,
    ExhibitCard,
    ContentContainer,
    Description,
    Title,
    UpperTitle,
    ImageContainer1,
    ImageContainer2,
    ImageContainer3,
    ExhibitWrapper,
    Heading,
    MainDescription,
    IntroSection,
} from "./ExhibitsPage.styles";
import { useState } from "react";

const imageContainers = [
    <ImageContainer1>
        <img src="/src/assets/images/architecture/giza02.jpg" />
        <img src="/src/assets/images/architecture/giza01.jpg" />
        <img src="/src/assets/images/architecture/giza03.jpg" />
    </ImageContainer1>,
    <ImageContainer2>
        <img src="/src/assets/images/architecture/rome.jpg" />
        <img src="/src/assets/images/architecture/cutedrome.jpg" />
    </ImageContainer2>,
    <ImageContainer3>
        <img src="/src/assets/images/architecture/rome.jpg" />
        <img src="/src/assets/images/architecture/cutedrome.jpg" />
    </ImageContainer3>,
];

export default function ExhibitsPage({ pageConfig }: ExhibitsPageProps) {
    const [center, setCenter] = useState(new THREE.Vector3());

    return (
        <>
            <IntroSection>
                <Heading>{pageConfig.heading}</Heading>
                <MainDescription>{pageConfig.mainDescription}</MainDescription>
            </IntroSection>
            <ModelsContainer>
                {pageConfig.modelsConfig.map((config, index) => (
                    <ExhibitWrapper key={index}>
                        <ExhibitCard $reverse={index % 2 === 0}>
                            <Scene modelConfig={config} />
                            <ContentContainer>
                                <UpperTitle>{config.upperTitle}</UpperTitle>
                                <Title>{config.title}</Title>
                                <Description>{config.description}</Description>
                            </ContentContainer>
                        </ExhibitCard>
                        {imageContainers[index % imageContainers.length]}
                    </ExhibitWrapper>
                ))}
            </ModelsContainer>
        </>
    );
}

type ExhibitsPageProps = {
    pageConfig: PageConfig;
};
