import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from "react";
import Model from "../components/Model";
import * as THREE from "three";
import { modelsConfig } from "./modelsConfig";
import {
    ModelsContainer,
    CanvasContainer,
    ModelCard,
    ContentContainer,
    Decription,
    Title,
    UpperTitle,
    TestContainer,
    ImageContainer1,
    ImageContainer2,
    ImageContainer3,
} from "./ArchitecturePage.styles";

export default function ArchitecturePage() {
    const [center, setCenter] = useState(new THREE.Vector3());

    return (
        <ModelsContainer>
            {modelsConfig.map((config, index) => (
                <>
                    <ModelCard key={index} $reverse={index % 2 === 0}>
                        <CanvasContainer>
                            <Canvas>
                                <Suspense fallback={"Loading..."}>
                                    <ambientLight
                                        intensity={config.lightIntensity}
                                    />

                                    <PerspectiveCamera
                                        makeDefault
                                        position={config.cameraPosition}
                                        fov={75}
                                        near={0.1}
                                        far={1000}
                                    />
                                    <OrbitControls
                                        target={center}
                                        rotateSpeed={0.2}
                                        minDistance={2}
                                        enableZoom={false}
                                    />
                                    {/* <Model
                                    path={config.path}
                                    setCenter={setCenter}
                                    /> */}
                                </Suspense>
                            </Canvas>
                        </CanvasContainer>
                        <ContentContainer>
                            <UpperTitle>{config.upperTitle}</UpperTitle>
                            <Title>{config.title}</Title>
                            <Decription>{config.description}</Decription>
                        </ContentContainer>
                    </ModelCard>
                    <TestContainer>
                        <ImageContainer1>
                            <img src="/src/assets/images/architecture/giza02.jpg" />
                            <img src="/src/assets/images/architecture/giza01.jpg" />
                            <img src="/src/assets/images/architecture/giza03.jpg" />
                        </ImageContainer1>
                        <ImageContainer2>
                            <img src="/src/assets/images/architecture/rome.jpg" />
                            <img src="/src/assets/images/architecture/cutedrome.jpg" />
                        </ImageContainer2>
                        <ImageContainer3>
                            <img src="/src/assets/images/architecture/rome.jpg" />
                            <img src="/src/assets/images/architecture/cutedrome.jpg" />
                        </ImageContainer3>
                    </TestContainer>
                </>
            ))}
        </ModelsContainer>
    );
}
