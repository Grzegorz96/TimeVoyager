import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./CommentsScene.styles";
import {
    OrbitControls,
    Bounds,
    ContactShadows,
    Grid,
    Environment,
} from "@react-three/drei";
import { Suspense, useState } from "react";
import CommentsModel from "./CommentsModel";
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

export default function CommentsScene({ path }: CommentsSceneProps) {
    const [isInteractionEnabled, setIsInteractionEnabled] = useState(false);
    const [modelDiagonalLength, setModelDiagonalLength] = useState(0);

    return (
        <SceneContainer>
            <Canvas>
                <Suspense fallback={null}>
                    <Environment preset={"studio"} />
                    <ContactShadows />
                    <Bounds fit clip observe maxDuration={1}>
                        <CommentsModel
                            path={path}
                            setModelDiagonalLength={setModelDiagonalLength}
                            setIsInteractionEnabled={setIsInteractionEnabled}
                        />
                    </Bounds>
                    <OrbitControls
                        makeDefault
                        autoRotate
                        autoRotateSpeed={0.75}
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 1.8}
                        enableRotate={isInteractionEnabled}
                        rotateSpeed={0.4}
                        enableZoom={isInteractionEnabled}
                        maxDistance={modelDiagonalLength}
                        minDistance={modelDiagonalLength * 0.6}
                    />
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}

type CommentsSceneProps = Pick<ModelConfig, "path">;
