import { architecturePageConfig } from "./architecturePageConfig";
import { prehistoryPageConfig } from "./prehistoryPageConfig";
import { artAndCraftPageConfig } from "./artAndCraftPageConfig";
import { vehiclesPageConfig } from "./vehiclesPageConfig";
import { militaryPageConfig } from "./militaryPageConfig";
import { technologyPageConfig } from "./technologyPageConfig";

export const pagesData = [
    {
        category: "architecture",
        config: architecturePageConfig,
    },
    {
        category: "prehistory",
        config: prehistoryPageConfig,
    },
    {
        category: "art-craft",
        config: artAndCraftPageConfig,
    },
    {
        category: "vehicles",
        config: vehiclesPageConfig,
    },
    {
        category: "military",
        config: militaryPageConfig,
    },
    {
        category: "technology",
        config: technologyPageConfig,
    },
];
