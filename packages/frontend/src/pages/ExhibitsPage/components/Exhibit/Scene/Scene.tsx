import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrbitControls,
    Grid,
    Environment,
    ContactShadows,
} from "@react-three/drei";
import { Container } from "./Scene.styles";
import Model from "./Model";
import { type ExhibitConfig } from "@/pages/ExhibitsPage/types";
import { type ExhibitsPageAction } from "@/pages/ExhibitsPage/states";
import { Vector3 } from "three";
import { HDRI_PATH } from "@/utils/constants";

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

export default function Scene({ modelPath, dispatch }: SceneProps) {
    const [modelPosition, setModelPosition] = useState<{
        center: Vector3;
        cameraDistance: number;
    }>({ center: new Vector3(), cameraDistance: 0 });

    return (
        <Container>
            <Canvas>
                <PerspectiveCamera
                    makeDefault
                    position={modelPosition.center
                        .clone()
                        .add(new Vector3(0, 0.2, modelPosition.cameraDistance))}
                />
                <OrbitControls
                    target={modelPosition.center}
                    minPolarAngle={0}
                    maxPolarAngle={Math.PI / 2}
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={true}
                    rotateSpeed={0.4}
                />
                <Suspense fallback={null}>
                    <Environment files={HDRI_PATH + "studio_small_03_1k.hdr"} />
                    <ContactShadows />
                    <Model
                        modelPath={modelPath}
                        setModelPosition={setModelPosition}
                        dispatch={dispatch}
                    />
                    <Ground />
                </Suspense>
            </Canvas>
        </Container>
    );
}

type SceneProps = {
    modelPath: ExhibitConfig["modelPath"];
    dispatch: React.Dispatch<ExhibitsPageAction>;
};
