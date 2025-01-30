import Scene from "./components/Scene";
import * as THREE from "three";
import type { PageConfig, ModelConfig } from "@/types";
import {
    ModelsContainer,
    ExhibitCard,
    ContentContainer,
    ShortDescription,
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
import { useState, useEffect } from "react";
import Actions from "./components/Actions";
import ReadMore from "./components/ReadMore";
import { set } from "zod";

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
    const [readMoreContent, setReadMoreContent] = useState<
        ModelConfig["content"]["longDescription"] | null
    >(null);

    useEffect(() => {
        return () => {
            setReadMoreContent(null);
        };
    }, [pageConfig]);

    return (
        <>
            {readMoreContent && (
                <ReadMore
                    readMoreContent={readMoreContent}
                    setReadMoreContent={setReadMoreContent}
                />
            )}
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
                                <UpperTitle>
                                    {config.content.upperTitle}
                                </UpperTitle>
                                <Title>{config.content.title}</Title>
                                <ShortDescription>
                                    {config.content.shortDescription}
                                </ShortDescription>
                                <Actions
                                    modelContent={config.content}
                                    setReadMoreContent={setReadMoreContent}
                                />
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
