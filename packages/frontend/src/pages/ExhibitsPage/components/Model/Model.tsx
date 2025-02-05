import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";
import { type Group, Vector3, Box3 } from "three";

export default function Model({
    path,
    onModelLoaded,
    setModelCenter,
}: ModelProps) {
    const { scene } = useGLTF(path);
    const ref = useRef<Group>(null);

    useEffect(() => {
        if (ref.current) {
            const bbox = new Box3().setFromObject(ref.current);
            const center = new Vector3();
            bbox.getCenter(center);
            setModelCenter(center);
        }

        onModelLoaded();
    }, [scene]);

    return (
        <group ref={ref} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

type ModelProps = {
    path: ModelConfig["path"];
    onModelLoaded: () => void;
    setModelCenter: (center: Vector3) => void;
};
