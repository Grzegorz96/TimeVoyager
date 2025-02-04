import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";
import { Box3, Vector3 } from "three";

export default function Model({
    path,
    onModelLoaded,
    setModelCenter,
}: ModelProps) {
    const model = useGLTF(path);
    const ref = useRef();

    useEffect(() => {
        if (ref.current) {
            const bbox = new Box3().setFromObject(ref.current);
            const center = new Vector3();
            bbox.getCenter(center);
            setModelCenter(center);
        }
        onModelLoaded();
    }, [model]);

    return <primitive ref={ref} object={model.scene} />;
}

type ModelProps = {
    path: ModelConfig["path"];
    onModelLoaded: () => void;
    setModelCenter: (center: Vector3) => void;
};
