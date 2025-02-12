import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, memo } from "react";
import { Box3, Vector3 } from "three";
import { type ModelConfig } from "@/pages/ExhibitsPage/types";

function CommentsModel({
    path,
    setModelDiagonalLength,
    setIsInteractionEnabled,
}: CommentsModelProps) {
    const { scene } = useGLTF(path);
    const modelRef = useRef(null);

    useEffect(() => {
        if (modelRef.current) {
            const bbox = new Box3().setFromObject(modelRef.current);
            const modelDiagonalLength = bbox.getSize(new Vector3()).length();
            console.log(modelDiagonalLength);
            setModelDiagonalLength(modelDiagonalLength);
        }
        setTimeout(() => {
            setIsInteractionEnabled(true);
        }, 1000);
    }, []);

    return <primitive object={scene.clone()} ref={modelRef} />;
}

type CommentsModelProps = {
    path: ModelConfig["path"];
    setModelDiagonalLength: React.Dispatch<React.SetStateAction<number>>;
    setIsInteractionEnabled: React.Dispatch<React.SetStateAction<boolean>>;
};

export default memo(CommentsModel);
