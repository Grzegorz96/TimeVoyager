import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, memo } from "react";
import { type Exhibit } from "@/pages/ExhibitsPage/types";
import { Vector3, Box3 } from "three";
import { Path } from "@/utils/constants";

function Model({
    modelPath,
    setModelPosition,
    setLoadedModelsCount,
}: ModelProps) {
    const { scene } = useGLTF(Path.MODELS + modelPath);
    const modelRef = useRef(null);

    useEffect(() => {
        if (modelRef.current) {
            const bbox = new Box3().setFromObject(modelRef.current);
            const center = bbox.getCenter(new Vector3());
            const cameraDistance = bbox.getSize(new Vector3()).length();
            setModelPosition({ center, cameraDistance });
        }
        setLoadedModelsCount((prev) => prev + 1);
    }, [modelPath]);

    return (
        <group ref={modelRef} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

type ModelProps = {
    modelPath: Exhibit["modelPath"];
    setModelPosition: React.Dispatch<
        React.SetStateAction<{
            center: Vector3;
            cameraDistance: number;
        }>
    >;
    setLoadedModelsCount: React.Dispatch<React.SetStateAction<number>>;
};

export default memo(Model);
