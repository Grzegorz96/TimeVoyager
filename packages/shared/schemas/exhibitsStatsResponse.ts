import { z } from "zod";
import { baseResponseSchema } from "./baseResponse";
import { exhibitStatsSchema } from "./exhibitStats";

export const exhibitStatsResponseSchema = baseResponseSchema.extend({
    data: z.array(exhibitStatsSchema),
});

export type ExhibitsStatsResponse = z.infer<typeof exhibitStatsResponseSchema>;
