import { Canvas } from "@react-three/fiber";
import { Container } from "./Scene.styles";
import {
    OrbitControls,
    Bounds,
    ContactShadows,
    Grid,
    Environment,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import Model from "./Model";
import { type Exhibit } from "@/pages/ExhibitsPage/types";
import { Path } from "@/utils/constants";

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

export default function Scene({ modelPath }: SceneProps) {
    const [modelState, setModelState] = useState<{
        isInteractionEnabled: boolean;
        cameraDistance: number;
    }>({
        isInteractionEnabled: false,
        cameraDistance: 0,
    });

    return (
        <Container>
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
                    enablePan={false}
                    maxDistance={modelState.cameraDistance}
                    minDistance={modelState.cameraDistance * 0.6}
                />
                <Suspense fallback={null}>
                    <Environment files={Path.HDRI + "studio_small_03_1k.hdr"} />
                    <ContactShadows />
                    <Bounds fit clip observe maxDuration={1}>
                        <Model
                            modelPath={modelPath}
                            setModelState={setModelState}
                        />
                    </Bounds>
                    <Ground />
                </Suspense>
            </Canvas>
        </Container>
    );
}

type SceneProps = Pick<Exhibit, "modelPath">;
