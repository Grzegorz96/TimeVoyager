import { Vector3 } from "three";

export type ModelConfig = {
    id: number;
    path: string;
    cameraPosition: Vector3;
    lightIntensity: number;
    content: {
        upperTitle: string;
        title: string;
        shortDescription: string;
        longDescription: string;
    };
};
