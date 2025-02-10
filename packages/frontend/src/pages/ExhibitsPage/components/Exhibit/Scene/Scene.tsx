import { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import {
    PerspectiveCamera,
    OrbitControls,
    Stage,
    Grid,
    Center,
    Bounds,
    AccumulativeShadows,
    RandomizedLight,
    Environment,
    CameraControls,
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

export default function Scene({ modelConfig, onModelLoaded }: SceneProps) {
    const [modelCenter, setModelCenter] = useState(new Vector3());

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
                        minPolarAngle={0}
                        maxPolarAngle={Math.PI / 2}
                        enableZoom={true}
                        // minDistance={2}
                        // maxDistance={5}
                        enablePan={true}
                        panSpeed={0.5}
                        enableRotate={true}
                        rotateSpeed={0.4}
                    />
                    <Environment preset={"studio"} />

                    {/* <Center>
                        <Bounds fit clip observe> */}
                    <Bounds fit clip observe>
                        <Model
                            path={modelConfig.path}
                            onModelLoaded={onModelLoaded}
                            setModelCenter={setModelCenter}
                        />
                    </Bounds>
                    {/* </Bounds>
                    </Center> */}
                    {/* </Bounds> */}
                    <Ground />
                    {/* </Stage> */}
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}

type SceneProps = {
    modelConfig: ModelConfig;
    onModelLoaded: () => void;
};
