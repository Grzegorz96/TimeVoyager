import { architecturePageConfig } from "./architecturePageConfig";
import { prehistoryPageConfig } from "./prehistoryPageConfig";
import { artAndCraftPageConfig } from "./artAndCraftPageConfig";
import { vehiclesPageConfig } from "./vehiclesPageConfig";
import { militaryPageConfig } from "./militaryPageConfig";
import { technologyPageConfig } from "./technologyPageConfig";

export const pagesData = [
    {
        path: "architecture",
        config: architecturePageConfig,
    },
    {
        path: "prehistory",
        config: prehistoryPageConfig,
    },
    {
        path: "art-craft",
        config: artAndCraftPageConfig,
    },
    {
        path: "vehicles",
        config: vehiclesPageConfig,
    },
    {
        path: "military",
        config: militaryPageConfig,
    },
    {
        path: "technology",
        config: technologyPageConfig,
    },
];
