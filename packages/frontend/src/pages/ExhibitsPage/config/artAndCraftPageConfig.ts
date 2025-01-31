import { PageConfig } from "@/pages/ExhibitsPage/types";
import { Vector3 } from "three";

export const artAndCraftPageConfig: PageConfig = {
    heading: "Timeless Art & Craft",
    mainDescription:
        "Dive into the world of creativity and craftsmanship, where human expression takes shape in unforgettable art and exquisite craftwork.",
    exhibitsConfig: [
        {
            id: 1,
            modelConfig: {
                path: "/src/assets/models/artcraft/01.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Italy, Florence",
                title: "Statue of David",
                shortDescription:
                    "Michelangelo's David - A masterpiece of Renaissance sculpture, symbolizing strength and beauty.",
                longDescription:
                    "Michelangelo's David - A masterpiece of Renaissance sculpture, symbolizing strength and beauty.",
            },
        },
        {
            id: 2,
            modelConfig: {
                path: "/src/assets/models/artcraft/02.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "France, Paris",
                title: "Mona Lisa",
                shortDescription:
                    "Mona Lisa - Leonardo da Vinci's enigmatic painting, one of the most famous works of art in the world.",
                longDescription:
                    "Mona Lisa - Leonardo da Vinci's enigmatic painting, one of the most famous works of art in the world.",
            },
        },
        {
            id: 3,
            modelConfig: {
                path: "/src/assets/models/artcraft/03.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Japan, Kyoto",
                title: "Origami Crane",
                shortDescription:
                    "Origami Crane - A traditional Japanese craft symbolizing peace and hope.",
                longDescription:
                    "Origami Crane - A traditional Japanese craft symbolizing peace and hope.",
            },
        },
        {
            id: 4,
            modelConfig: {
                path: "/src/assets/models/artcraft/04.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "India, Agra",
                title: "Taj Mahal Inlay",
                shortDescription:
                    "Taj Mahal Marble Inlay - Exquisite craftsmanship with intricate designs using semi-precious stones.",
                longDescription:
                    "Taj Mahal Marble Inlay - Exquisite craftsmanship with intricate designs using semi-precious stones.",
            },
        },
        {
            id: 5,
            modelConfig: {
                path: "/src/assets/models/artcraft/05.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "USA, Chicago",
                title: "Cloud Gate",
                shortDescription:
                    "Cloud Gate - A public sculpture by Anish Kapoor, also known as 'The Bean', a modern marvel of reflective art.",
                longDescription:
                    "Cloud Gate - A public sculpture by Anish Kapoor, also known as 'The Bean', a modern marvel of reflective art.",
            },
        },
        {
            id: 6,
            modelConfig: {
                path: "/src/assets/models/artcraft/06.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Mexico, Oaxaca",
                title: "Alebrijes",
                shortDescription:
                    "Alebrijes - Brightly colored Mexican folk art sculptures of fantastical creatures.",
                longDescription:
                    "Alebrijes - Brightly colored Mexican folk art sculptures of fantastical creatures.",
            },
        },
    ],
};
