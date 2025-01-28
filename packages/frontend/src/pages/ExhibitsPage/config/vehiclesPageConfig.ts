import * as THREE from "three";

export const vehiclesPageConfig = {
    heading: "Revolutionary Vehicles",
    mainDescription:
        "From the earliest wheels to cutting-edge innovations, explore the vehicles that transformed transportation and shaped the way we move.",
    modelsConfig: [
        {
            id: 1,
            path: "/src/assets/models/vehicles/01.glb",
            cameraPosition: new THREE.Vector3(0, 8, 15),
            lightIntensity: 1,
            upperTitle: "USA, Detroit",
            title: "Ford Model T",
            description:
                "Ford Model T - The first mass-produced car, which revolutionized personal transportation and made automobiles accessible to the average person.",
        },
        {
            id: 2,
            path: "/src/assets/models/vehicles/02.glb",
            cameraPosition: new THREE.Vector3(0, 8, 15),
            lightIntensity: 1,
            upperTitle: "Germany, Stuttgart",
            title: "Mercedes-Benz 300SL",
            description:
                "Mercedes-Benz 300SL - Known for its iconic gullwing doors and advanced engineering, this car defined luxury in the 1950s.",
        },
        {
            id: 3,
            path: "/src/assets/models/vehicles/03.glb",
            cameraPosition: new THREE.Vector3(0, 8, 15),
            lightIntensity: 1,
            upperTitle: "Japan, Tokyo",
            title: "Toyota Prius",
            description:
                "Toyota Prius - A revolutionary hybrid vehicle that set the benchmark for fuel efficiency and environmental consciousness in the modern automotive industry.",
        },
        {
            id: 4,
            path: "/src/assets/models/vehicles/04.glb",
            cameraPosition: new THREE.Vector3(0, 8, 15),
            lightIntensity: 1,
            upperTitle: "Italy, Maranello",
            title: "Ferrari F40",
            description:
                "Ferrari F40 - An iconic supercar celebrated for its speed, design, and status as a symbol of automotive excellence.",
        },
        {
            id: 5,
            path: "/src/assets/models/vehicles/05.glb",
            cameraPosition: new THREE.Vector3(0, 8, 15),
            lightIntensity: 1,
            upperTitle: "USA, Florida",
            title: "Space Shuttle",
            description:
                "NASA's Space Shuttle - A reusable spacecraft that revolutionized space exploration by allowing repeated missions to Earth's orbit.",
        },
        {
            id: 6,
            path: "/src/assets/models/vehicles/06.glb",
            cameraPosition: new THREE.Vector3(0, 8, 15),
            lightIntensity: 1,
            upperTitle: "Germany, Wolfsburg",
            title: "Volkswagen Beetle",
            description:
                "Volkswagen Beetle - One of the most popular cars in history, known for its simplicity, reliability, and global appeal.",
        },
    ],
};
