import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera, OrbitControls } from "@react-three/drei";
import { SceneContainer } from "./Scene.styles";
import * as THREE from "three";
import Model from "../Model";

export default function Scene({ modelConfig }: SceneProps) {
    return (
        <SceneContainer>
            <Canvas>
                <Suspense fallback={"Loading..."}>
                    <ambientLight intensity={modelConfig.lightIntensity} />

                    <PerspectiveCamera
                        makeDefault
                        position={modelConfig.cameraPosition}
                        fov={75}
                        near={0.1}
                        far={1000}
                    />
                    <OrbitControls
                        target={[0, 0, 0]}
                        rotateSpeed={0.2}
                        minDistance={2}
                        enableZoom={false}
                    />
                    {/* <Model
                        path={modelConfig.path}
                        // setCenter={setCenter}
                    /> */}
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}

type SceneProps = {
    modelConfig: {
        cameraPosition: THREE.Vector3;
        lightIntensity: number;
        path: string;
    };
};
