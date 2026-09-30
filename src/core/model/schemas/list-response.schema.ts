import { z } from "zod";

export const createListResponseSchema = <T extends z.ZodType>(itemSchema: T) => {
    return z.object({
        data: z.array(itemSchema),
        from: z.number().nullable(),
        to: z.number().nullable(),
        per_page: z.number(),
        current_page: z.number(),
        last_page: z.number(),
        total: z.number(),
    })
}