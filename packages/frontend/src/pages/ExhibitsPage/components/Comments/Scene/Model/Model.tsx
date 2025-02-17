import { useGLTF } from "@react-three/drei";
import { useEffect, useRef, memo } from "react";
import { Box3, Vector3 } from "three";
import { type ExhibitConfig } from "@/pages/ExhibitsPage/types";
import { MODELS_PATH } from "@/utils/constants";

function Model({ modelPath, setModelState }: ModelProps) {
    const { scene } = useGLTF(MODELS_PATH + modelPath);
    const modelRef = useRef(null);

    useEffect(() => {
        if (modelRef.current) {
            const bbox = new Box3().setFromObject(modelRef.current);
            const cameraDistance = bbox.getSize(new Vector3()).length();

            setModelState((prevState) => ({
                ...prevState,
                cameraDistance,
            }));
        }
        setTimeout(() => {
            setModelState((prevState) => ({
                ...prevState,
                isInteractionEnabled: true,
            }));
        }, 1000);
    }, []);

    return <primitive object={scene.clone()} ref={modelRef} />;
}

type ModelProps = {
    modelPath: ExhibitConfig["modelPath"];
    setModelState: React.Dispatch<
        React.SetStateAction<{
            isInteractionEnabled: boolean;
            cameraDistance: number;
        }>
    >;
};

export default memo(Model);
