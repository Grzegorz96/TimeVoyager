import { PageConfig } from "@/pages/ExhibitsPage/types";
import { Vector3 } from "three";

export const technologyPageConfig: PageConfig = {
    heading: "Technological Innovations",
    mainDescription:
        "Explore the breakthroughs that shaped the modern world, from ancient tools to the latest advancements in technology.",
    exhibitsConfig: [
        {
            id: 1,
            modelConfig: {
                path: "/src/assets/models/technology/01.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "USA, California",
                title: "Apple Macintosh",
                shortDescription:
                    "Apple Macintosh - The first personal computer with a graphical user interface, revolutionizing the way people interacted with technology.",
                longDescription:
                    "Apple Macintosh - The first personal computer with a graphical user interface, revolutionizing the way people interacted with technology.",
            },
            images: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
            imageContainerImages: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
        },
        {
            id: 2,
            modelConfig: {
                path: "/src/assets/models/technology/02.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Switzerland, CERN",
                title: "The World Wide Web",
                shortDescription:
                    "The World Wide Web - Invented at CERN, it forever changed how we access and share information.",
                longDescription:
                    "The World Wide Web - Invented at CERN, it forever changed how we access and share information.",
            },
            images: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
            imageContainerImages: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
            ],
        },
        {
            id: 3,
            modelConfig: {
                path: "/src/assets/models/technology/03.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Japan, Tokyo",
                title: "Sony Walkman",
                shortDescription:
                    "Sony Walkman - A portable cassette player that revolutionized personal music consumption.",
                longDescription:
                    "Sony Walkman - A portable cassette player that revolutionized personal music consumption.",
            },
            images: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
            imageContainerImages: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
            ],
        },
        {
            id: 4,
            modelConfig: {
                path: "/src/assets/models/technology/04.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "USA, Silicon Valley",
                title: "Intel 4004",
                shortDescription:
                    "Intel 4004 - The world's first commercial microprocessor, marking the beginning of the digital revolution.",
                longDescription:
                    "Intel 4004 - The world's first commercial microprocessor, marking the beginning of the digital revolution.",
            },
            images: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
            imageContainerImages: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
        },
        {
            id: 5,
            modelConfig: {
                path: "/src/assets/models/technology/05.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "USA, Seattle",
                title: "Amazon Echo",
                shortDescription:
                    "Amazon Echo - A smart speaker powered by AI, bringing voice control into daily life.",
                longDescription:
                    "Amazon Echo - A smart speaker powered by AI, bringing voice control into daily life.",
            },
            images: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
            imageContainerImages: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
            ],
        },
        {
            id: 6,
            modelConfig: {
                path: "/src/assets/models/technology/06.glb",
                cameraPosition: new Vector3(0, 8, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "South Korea, Seoul",
                title: "Samsung Galaxy S",
                shortDescription:
                    "Samsung Galaxy S - A flagship smartphone series known for innovation in design and technology.",
                longDescription:
                    "Samsung Galaxy S - A flagship smartphone series known for innovation in design and technology.",
            },
            images: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
                "/src/assets/images/architecture/giza03.jpg",
            ],
            imageContainerImages: [
                "/src/assets/images/architecture/giza01.jpg",
                "/src/assets/images/architecture/giza02.jpg",
            ],
        },
    ],
};
