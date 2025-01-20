import { useGLTF, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { useTheme } from "styled-components";
import { Suspense } from "react";

function Model({ setCenter }) {
    const gltf = useGLTF(
        "/src/assets/models/architecture/01-cheops-pyramid/scene.glb"
    );

    const modelRef = useRef();

    // Ustal środek modelu po załadowaniu
    useEffect(() => {
        if (modelRef.current) {
            const boundingBox = new THREE.Box3().setFromObject(
                modelRef.current
            );
            const center = boundingBox.getCenter(new THREE.Vector3());
            setCenter([center.x, center.y, center.z]);
        }
    }, [gltf]);

    return <primitive ref={modelRef} object={gltf.scene} />;
}

export default function ArchitecturePage() {
    const [center, setCenter] = useState([0, 0, 0]);
    const theme = useTheme();

    return (
        // <div
        //     style={{
        //         height: "100%",
        //         width: "50%",
        //         overflow: "hidden",
        //         backgroundColor: "red",
        //     }}
        // >
        <Canvas
            camera={{
                position: [0, 5, 10],
                near: 0.1,
                far: 100,
                fov: 75,
            }}
            style={{
                width: "600px",
                height: "600px",
                backgroundColor: theme.textError,
            }}
        >
            <Suspense fallback={"Loading..."}>
                <ambientLight intensity={0.8} /> {/* Zwiększona intensywność */}
                <spotLight
                    position={[10, 10, 10]}
                    angle={0.15}
                    penumbra={1}
                    intensity={0.9}
                />
                <directionalLight
                    position={[5, 5, 5]} // Ustawienie pozycji światła
                    intensity={1.2} // Zwiększona intensywność
                    castShadow // Umożliwia rzucanie cieni przez model
                />
                {/* Kamera o bliższym ustawieniu */}
                <PerspectiveCamera
                    makeDefault
                    position={[1, 3, 3]}
                    fov={70}
                    near={0.1}
                    far={2000}
                />
                <OrbitControls
                    enableZoom={true}
                    enablePan={true}
                    enableRotate={true}
                    zoomSpeed={0.5}
                    rotateSpeed={0.2}
                    panSpeed={0.3}
                    target={center}
                />
                <Model setCenter={setCenter} />
            </Suspense>
        </Canvas>
        // </div>
    );
}
