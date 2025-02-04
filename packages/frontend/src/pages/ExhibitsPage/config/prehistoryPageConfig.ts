import { PageConfig } from "@/pages/ExhibitsPage/types";
import { Vector3 } from "three";

export const prehistoryPageConfig: PageConfig = {
    heading: "Prehistory",
    mainDescription:
        "Explore the ancient world of dinosaurs and other prehistoric creatures. Learn about the different species that roamed the Earth millions of years ago.",
    exhibitsConfig: [
        {
            id: 1,
            modelConfig: {
                path: "/src/assets/models/prehistory/01.glb",
                cameraPosition: new Vector3(0, 5, 15),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Late Cretaceous Period",
                title: "Tyrannosaurus Rex",
                shortDescription:
                    "Tyrannosaurus Rex - One of the largest and most well-known carnivorous dinosaurs, Tyrannosaurus rex lived during the Late Cretaceous period, around 68 to 66 million years ago. Known for its powerful jaws and massive size, it was one of the top predators of its time.",
                longDescription:
                    "Tyrannosaurus Rex - One of the largest and most well-known carnivorous dinosaurs, Tyrannosaurus rex lived during the Late Cretaceous period, around 68 to 66 million years ago. Known for its powerful jaws and massive size, it was one of the top predators of its time.",
            },
        },
        {
            id: 2,
            modelConfig: {
                path: "/src/assets/models/prehistory/02.glb",
                cameraPosition: new Vector3(0, 7, 18),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Late Cretaceous Period",
                title: "Triceratops",
                shortDescription:
                    "Triceratops - A large herbivorous dinosaur with three distinctive facial horns and a bony frill around its neck. It lived in the Late Cretaceous period and was one of the last non-avian dinosaurs to exist before the extinction event.",
                longDescription:
                    "Triceratops - A large herbivorous dinosaur with three distinctive facial horns and a bony frill around its neck. It lived in the Late Cretaceous period and was one of the last non-avian dinosaurs to exist before the extinction event.",
            },
        },
        {
            id: 3,
            modelConfig: {
                path: "/src/assets/models/prehistory/03.glb",
                cameraPosition: new Vector3(0, 5, 12),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Late Cretaceous Period",
                title: "Velociraptor",
                shortDescription:
                    "Velociraptor - A small but swift and intelligent carnivorous dinosaur. Velociraptor lived during the Late Cretaceous period and is known for its hunting in packs, as well as its sharp claws and agility.",
                longDescription:
                    "Velociraptor - A small but swift and intelligent carnivorous dinosaur. Velociraptor lived during the Late Cretaceous period and is known for its hunting in packs, as well as its sharp claws and agility.",
            },
        },
        {
            id: 4,
            modelConfig: {
                path: "/src/assets/models/prehistory/04.glb",
                cameraPosition: new Vector3(0, 15, 30),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Late Jurassic Period",
                title: "Brachiosaurus",
                shortDescription:
                    "Brachiosaurus - A massive herbivorous dinosaur with a long neck and large body, Brachiosaurus lived during the Late Jurassic period. It is known for its ability to reach high vegetation due to its tall stature.",
                longDescription:
                    "Brachiosaurus - A massive herbivorous dinosaur with a long neck and large body, Brachiosaurus lived during the Late Jurassic period. It is known for its ability to reach high vegetation due to its tall stature.",
            },
        },
        {
            id: 5,
            modelConfig: {
                path: "/src/assets/models/prehistory/05.glb",
                cameraPosition: new Vector3(0, 6, 20),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Late Cretaceous Period",
                title: "Ankylosaurus",
                shortDescription:
                    "Ankylosaurus - A heavily armored herbivorous dinosaur that lived during the Late Cretaceous period. Known for its thick bony plates and large club at the end of its tail, Ankylosaurus was a formidable creature.",
                longDescription:
                    "Ankylosaurus - A heavily armored herbivorous dinosaur that lived during the Late Cretaceous period. Known for its thick bony plates and large club at the end of its tail, Ankylosaurus was a formidable creature.",
            },
        },
        {
            id: 6,
            modelConfig: {
                path: "/src/assets/models/prehistory/06.glb",
                cameraPosition: new Vector3(0, 10, 25),
                lightIntensity: 1,
            },
            content: {
                upperTitle: "Mesozoic Era",
                title: "Plesiosaurus",
                shortDescription:
                    "Plesiosaurus - A marine reptile that lived during the Mesozoic Era, Plesiosaurus is known for its long neck, small head, and large flippers. It was one of the apex predators of the oceans during the Jurassic and Cretaceous periods.",
                longDescription:
                    "Plesiosaurus - A marine reptile that lived during the Mesozoic Era, Plesiosaurus is known for its long neck, small head, and large flippers. It was one of the apex predators of the oceans during the Jurassic and Cretaceous periods.",
            },
        },
    ],
};
