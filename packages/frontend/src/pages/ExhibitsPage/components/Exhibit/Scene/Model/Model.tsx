import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, memo } from "react";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";
import { Vector3, Box3 } from "three";
import {
    incrementLoadedModelsCount,
    type ExhibitsPageAction,
} from "@/pages/ExhibitsPage/states";

function Model({ path, setModelPosition, dispatch }: ModelProps) {
    const { scene } = useGLTF(path);
    const modelRef = useRef(null);

    useEffect(() => {
        if (modelRef.current) {
            const bbox = new Box3().setFromObject(modelRef.current);
            const center = bbox.getCenter(new Vector3());
            const cameraDistance = bbox.getSize(new Vector3()).length();
            setModelPosition({ center, cameraDistance });
        }
        dispatch(incrementLoadedModelsCount());
    }, [path]);

    return (
        <group ref={modelRef} dispose={null}>
            <primitive object={scene} />
        </group>
    );
}

type ModelProps = {
    path: ModelConfig["path"];
    setModelPosition: React.Dispatch<
        React.SetStateAction<{
            center: Vector3;
            cameraDistance: number;
        }>
    >;
    dispatch: React.Dispatch<ExhibitsPageAction>;
};

export default memo(Model);
