import { Canvas } from "@react-three/fiber";
import { SceneContainer } from "./SceneForComment.styles";
import {
    useGLTF,
    OrbitControls,
    Stage,
    Center,
    Bounds,
    ContactShadows,
    Grid,
} from "@react-three/drei";
import { Suspense } from "react";

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

export default function SceneForComment({ path }: { path: string }) {
    const { scene } = useGLTF(path);

    return (
        <SceneContainer>
            <Canvas>
                <Suspense fallback={null}>
                    <OrbitControls
                        autoRotate
                        autoRotateSpeed={0.72}
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
                    <ambientLight intensity={0.4} />
                    <Stage
                        preset={"upfront"}
                        intensity={0.4}
                        shadows={false}
                        environment={"studio"}
                        adjustCamera={true}
                    >
                        <primitive object={scene.clone(true)} />
                    </Stage>
                    <Ground />
                    {/* <Stage
                        preset={"upfront"}
                        intensity={0.4}
                        shadows={false}
                        environment={"studio"}
                        adjustCamera={true}
                    > */}
                    {/* <Center>
                        <Bounds fit clip observe>
                            <primitive object={scene.clone(true)} />
                        </Bounds>
                    </Center> */}
                    {/* </Stage> */}
                </Suspense>
            </Canvas>
        </SceneContainer>
    );
}
