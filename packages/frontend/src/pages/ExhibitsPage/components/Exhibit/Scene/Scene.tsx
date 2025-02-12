import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrbitControls,
    Grid,
    Environment,
    ContactShadows,
} from "@react-three/drei";
import { SceneContainer } from "./Scene.styles";
import Model from "./Model";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";
import { Vector3 } from "three";

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

export default function Scene({ path, onModelLoaded }: SceneProps) {
    const [modelPosition, setModelPosition] = useState<{
        center: Vector3;
        cameraDistance: number;
    }>({ center: new Vector3(), cameraDistance: 0 });

    return (
        <SceneContainer $forComments={onModelLoaded ? false : true}>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={modelPosition.center
                        .clone()
                        .add(new Vector3(0, 0.2, modelPosition.cameraDistance))}
                />
                <OrbitControls
                    target={modelPosition.center.toArray()}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={false}
                    enableRotate={true}
                    rotateSpeed={0.4}
                />
                <Suspense fallback={null}>
                    <Environment preset={"studio"} />
                    <ContactShadows />
                    <Model
                        path={path}
                        setModelPosition={setModelPosition}
                        onModelLoaded={onModelLoaded}
                    />
                    <Ground />
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}

type SceneProps = {
    path: ModelConfig["path"];
    onModelLoaded?: () => void | undefined;
};
