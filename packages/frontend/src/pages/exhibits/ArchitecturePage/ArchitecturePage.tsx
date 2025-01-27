import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Model from "../components/Model";
import * as THREE from "three";
import { modelsConfig } from "../config/architectureModelsConfig";
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
    Description2,
    HeadingContainer,
} from "./ArchitecturePage.styles";
import Scene from "../components/Scene";

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

export default function ArchitecturePage() {
    const [center, setCenter] = useState(new THREE.Vector3());

    return (
        <>
            <HeadingContainer>
                <Heading>World's Architectural Wonders</Heading>
                <Description2>
                    Discover the most magnificent architectural landmarks from
                    around the globe - from ancient structures to modern
                    masterpieces. Immerse yourself in the beauty, history, and
                    culture behind these extraordinary creations.
                </Description2>
            </HeadingContainer>
            <ModelsContainer>
                {modelsConfig.map((config, index) => (
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
