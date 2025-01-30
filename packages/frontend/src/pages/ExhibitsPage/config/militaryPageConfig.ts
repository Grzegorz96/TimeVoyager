import { PageConfig } from "@/types";
import { Vector3 } from "three";

export const militaryPageConfig: PageConfig = {
    heading: "Historic Military Marvels",
    mainDescription:
        "Explore the groundbreaking innovations and iconic machines that shaped military history across the ages. Discover their stories and significance in the evolution of warfare.",
    modelsConfig: [
        {
            id: 1,
            path: "/src/assets/models/military/01.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "France, Normandy",
                title: "D-Day Landing Craft",
                shortDescription:
                    "The D-Day Landing Craft - A key vehicle used during the Allied invasion of Normandy in World War II, instrumental in transporting troops and equipment to the beaches.",
                longDescription:
                    "The D-Day Landing Craft - A key vehicle used during the Allied invasion of Normandy in World War II, instrumental in transporting troops and equipment to the beaches.",
            },
        },
        {
            id: 2,
            path: "/src/assets/models/military/02.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "Germany, Berlin",
                title: "Panzerkampfwagen VI (Tiger I)",
                shortDescription:
                    "The Tiger I - A fearsome German heavy tank from World War II, known for its powerful armament and heavily armored design.",
                longDescription:
                    "The Tiger I - A fearsome German heavy tank from World War II, known for its powerful armament and heavily armored design.",
            },
        },
        {
            id: 3,
            path: "/src/assets/models/military/03.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "USA, Virginia",
                title: "USS Monitor",
                shortDescription:
                    "USS Monitor - A Civil War ironclad warship from the Union Navy, famous for its innovative turret design and role in the Battle of Hampton Roads.",
                longDescription:
                    "USS Monitor - A Civil War ironclad warship from the Union Navy, famous for its innovative turret design and role in the Battle of Hampton Roads.",
            },
        },
        {
            id: 4,
            path: "/src/assets/models/military/04.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "Russia, Moscow",
                title: "T-34 Tank",
                shortDescription:
                    "T-34 Tank - A Soviet medium tank that played a pivotal role in World War II, recognized for its reliability and revolutionary design.",
                longDescription:
                    "T-34 Tank - A Soviet medium tank that played a pivotal role in World War II, recognized for its reliability and revolutionary design.",
            },
        },
        {
            id: 5,
            path: "/src/assets/models/military/05.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "England, Portsmouth",
                title: "HMS Victory",
                shortDescription:
                    "HMS Victory - Lord Nelson's flagship during the Battle of Trafalgar in 1805, a symbol of British naval dominance.",
                longDescription:
                    "HMS Victory - Lord Nelson's flagship during the Battle of Trafalgar in 1805, a symbol of British naval dominance.",
            },
        },
        {
            id: 6,
            path: "/src/assets/models/military/06.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "Japan, Hiroshima",
                title: "Atomic Bomb Little Boy",
                shortDescription:
                    "Little Boy - The atomic bomb dropped on Hiroshima during World War II, marking a turning point in modern warfare.",
                longDescription:
                    "Little Boy - The atomic bomb dropped on Hiroshima during World War II, marking a turning point in modern warfare.",
            },
        },
    ],
};
