"use server";

import {createServerActionClient, SupabaseClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

import {responseError, responseSuccess} from "@/utils/response";

export async function createPlayer(name: string, session_id: number, supabase?: SupabaseClient) {
    // If the client is not provided, create a new one
    if (!supabase) {
        supabase = createServerActionClient({
            cookies
        });
    }

    try {
        const { data, error } = await supabase
            .from("player")
            .insert([{ name, session_id }])
            .select();

        if (error) return responseError(error);

        return responseSuccess(data);

    } catch(err) {
        throw err;
    }
}