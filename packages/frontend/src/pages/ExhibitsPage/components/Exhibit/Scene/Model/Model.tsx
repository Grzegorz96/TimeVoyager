import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, memo } from "react";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";
import { type Group, Vector3, Box3 } from "three";

function Model({ path, onModelLoaded, setModelPosition }: ModelProps) {
    const { scene } = useGLTF(path);
    const ref = useRef(null);

    useEffect(() => {
        if (ref.current) {
            const bbox = new Box3().setFromObject(ref.current);
            const center = bbox.getCenter(new Vector3());
            const cameraDistance = bbox.getSize(new Vector3()).length();
            setModelPosition({ center, cameraDistance });
        }
        onModelLoaded();
    }, [path]);

    return <primitive object={scene.clone()} ref={ref} />;
}

type ModelProps = {
    path: ModelConfig["path"];
    onModelLoaded: () => void;
    setModelPosition: React.Dispatch<
        React.SetStateAction<{
            center: Vector3;
            cameraDistance: number;
        }>
    >;
};

export default memo(Model);
