import { z } from "zod";
import { MAX_KEY_LENGTH } from "@/utils/constants";

export const JoinSchema = z.object({
    roomId: z.string().length(MAX_KEY_LENGTH, `The Room ID must be exactly ${MAX_KEY_LENGTH} characters. Like a perfect pour!`),
    username: z.string().min(1, {
        message: "Don't be shy, type in your nickname. Even if it's 'Tipsy McStagger'.",
    }).max(20, {
        message: "That name's longer than a beer conga line. Keep it short and sweet.",
    }),
})