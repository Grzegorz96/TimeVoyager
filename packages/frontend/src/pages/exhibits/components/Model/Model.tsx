import { useGLTF } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

export default function Model({ path, setCenter }: ModelProps) {
    const gltf = useGLTF(path);
    const modelRef = useRef();

    useEffect(() => {
        if (modelRef.current) {
            const boundingBox = new THREE.Box3().setFromObject(
                modelRef.current
            );
            const center = boundingBox.getCenter(new THREE.Vector3());
            setCenter(center);
        }
    }, [gltf]);

    return <primitive ref={modelRef} object={gltf.scene} />;
}

type ModelProps = {
    path: string;
    setCenter: (center: THREE.Vector3) => void;
};
