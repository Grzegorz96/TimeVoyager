import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./Scene.styles";
import {
    OrbitControls,
    Bounds,
    ContactShadows,
    Grid,
    Environment,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import Model from "./Model";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";

function Ground() {
    const gridConfig = {
        cellSize: 0.5,
        cellThickness: 0.5,
        cellColor: "#6f6f6f",
        sectionSize: 3,
        sectionThickness: 1,
        sectionColor: "#9d4b4b",
        fadeDistance: 30,
        fadeStrength: 1,
        followCamera: false,
        infiniteGrid: true,
    };
    return <Grid position={[0, 0, 0]} args={[10.5, 10.5]} {...gridConfig} />;
}

export default function Scene({ path }: SceneProps) {
    const [modelState, setModelState] = useState<{
        isInteractionEnabled: boolean;
        cameraDistance: number;
    }>({
        isInteractionEnabled: false,
        cameraDistance: 0,
    });

    return (
        <SceneContainer>
            <Canvas>
                <OrbitControls
                    makeDefault
                    autoRotate
                    autoRotateSpeed={0.75}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 1.8}
                    enableRotate={modelState.isInteractionEnabled}
                    rotateSpeed={0.4}
                    enableZoom={modelState.isInteractionEnabled}
                    maxDistance={modelState.cameraDistance}
                    minDistance={modelState.cameraDistance * 0.6}
                />
                <Suspense fallback={null}>
                    <Environment preset={"studio"} />
                    <ContactShadows />
                    <Bounds fit clip observe maxDuration={1}>
                        <Model path={path} setModelState={setModelState} />
                    </Bounds>
                    <Ground />
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}

type SceneProps = Pick<ModelConfig, "path">;
