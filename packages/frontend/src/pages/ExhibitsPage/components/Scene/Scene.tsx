import { Suspense, useState, memo } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { SceneContainer } from "./Scene.styles";
import Model from "../Model";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";
import { Vector3 } from "three";

function Scene({ modelConfig, onModelLoaded }: SceneProps) {
    const [modelCenter, setModelCenter] = useState(new Vector3());

    // console.log("Rendering Scene");

    return (
        <SceneContainer>
            <Canvas>
                <Suspense fallback={null}>
                    <ambientLight intensity={modelConfig.lightIntensity} />

                    <PerspectiveCamera
                        makeDefault
                        position={modelCenter.clone().add(new Vector3(0, 0, 3))}
                    />
                    <OrbitControls
                        target={modelCenter.toArray()}
                        rotateSpeed={0.2}
                        minDistance={2}
                        enableZoom={true}
                    />
                    <Model
                        path={modelConfig.path}
                        onModelLoaded={onModelLoaded}
                        setModelCenter={setModelCenter}
                    />
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}

type SceneProps = {
    modelConfig: ModelConfig;
    onModelLoaded: () => void;
};

export default memo(Scene);
