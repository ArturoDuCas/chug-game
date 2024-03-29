import { z } from "zod";
import { MAX_KEY_LENGTH } from "@/utils/constants";

export const JoinSchema = z.object({
    roomId: z.string().length(MAX_KEY_LENGTH, `Room ID must be ${MAX_KEY_LENGTH} characters`),
})