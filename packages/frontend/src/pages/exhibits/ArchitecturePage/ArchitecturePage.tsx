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
    Decription,
} from "./ArchitecturePage.styles";

export default function ArchitecturePage() {
    const [center, setCenter] = useState(new THREE.Vector3());

    return (
        <ModelsContainer>
            {modelsConfig.map((config, index) => (
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
                                />
                                <Model
                                    path={config.path}
                                    setCenter={setCenter}
                                />
                            </Suspense>
                        </Canvas>
                    </CanvasContainer>
                    <Decription>{config.description}</Decription>
                </ModelCard>
            ))}
        </ModelsContainer>
    );
}
