import { PageConfig } from "@/types";
import { Vector3 } from "three";

export const technologyPageConfig: PageConfig = {
    heading: "Technological Innovations",
    mainDescription:
        "Explore the breakthroughs that shaped the modern world, from ancient tools to the latest advancements in technology.",
    modelsConfig: [
        {
            id: 1,
            path: "/src/assets/models/technology/01.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "USA, California",
                title: "Apple Macintosh",
                shortDescription:
                    "Apple Macintosh - The first personal computer with a graphical user interface, revolutionizing the way people interacted with technology.",
                longDescription:
                    "Apple Macintosh - The first personal computer with a graphical user interface, revolutionizing the way people interacted with technology.",
            },
        },
        {
            id: 2,
            path: "/src/assets/models/technology/02.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "Switzerland, CERN",
                title: "The World Wide Web",
                shortDescription:
                    "The World Wide Web - Invented at CERN, it forever changed how we access and share information.",
                longDescription:
                    "The World Wide Web - Invented at CERN, it forever changed how we access and share information.",
            },
        },
        {
            id: 3,
            path: "/src/assets/models/technology/03.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "Japan, Tokyo",
                title: "Sony Walkman",
                shortDescription:
                    "Sony Walkman - A portable cassette player that revolutionized personal music consumption.",
                longDescription:
                    "Sony Walkman - A portable cassette player that revolutionized personal music consumption.",
            },
        },
        {
            id: 4,
            path: "/src/assets/models/technology/04.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "USA, Silicon Valley",
                title: "Intel 4004",
                shortDescription:
                    "Intel 4004 - The world's first commercial microprocessor, marking the beginning of the digital revolution.",
                longDescription:
                    "Intel 4004 - The world's first commercial microprocessor, marking the beginning of the digital revolution.",
            },
        },
        {
            id: 5,
            path: "/src/assets/models/technology/05.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "USA, Seattle",
                title: "Amazon Echo",
                shortDescription:
                    "Amazon Echo - A smart speaker powered by AI, bringing voice control into daily life.",
                longDescription:
                    "Amazon Echo - A smart speaker powered by AI, bringing voice control into daily life.",
            },
        },
        {
            id: 6,
            path: "/src/assets/models/technology/06.glb",
            cameraPosition: new Vector3(0, 8, 15),
            lightIntensity: 1,
            content: {
                upperTitle: "South Korea, Seoul",
                title: "Samsung Galaxy S",
                shortDescription:
                    "Samsung Galaxy S - A flagship smartphone series known for innovation in design and technology.",
                longDescription:
                    "Samsung Galaxy S - A flagship smartphone series known for innovation in design and technology.",
            },
        },
    ],
};
