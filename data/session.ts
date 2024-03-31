"use server";

import {createServerActionClient, SupabaseClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";
import {createPlayer} from "@/data/player";
import {responseSuccess, responseError} from "@/utils/response";

export const getSessionByKey = async (key: number, client?: SupabaseClient) => {
  // If the client is not provided, create a new one
  if (!client) {
    client = createServerActionClient({
      cookies
    });
  }

  try {
    const {data, error} = await client
        .from("session")
        .select()
        .eq("key", key);

    if (error) responseError("Couldn't get the session by key. Please try again.")

    return responseSuccess(data);
  } catch (err) {
    throw err;
  }
}


function generateKey() {
  // Generar un entero de 4 dígitos
  return Math.floor(1000 + Math.random() * 9000);
}

export const createSession = async () => {
  const supabase = createServerActionClient({
    cookies
  });

  try {
    // Create a unique key
    let key = generateKey();
    let flag = 5;  // 5 tries to generate a unique key
    let sessionRes = await getSessionByKey(key, supabase);
    while(sessionRes.data.length !== 0 && flag > 0) {
      console.log(`Number of tries left: ${flag}`);
      key = generateKey();
      sessionRes = await getSessionByKey(key, supabase);
      flag--;
    }
    let session = sessionRes.data;
    if (session.length !== 0) return responseError("Couldn't generate a unique key. Please try again.");


    // Insert the key into the session table
    const {data, error} = await supabase
        .from("session")
        .insert([
          {key: key},
        ])
        .select();

    if (error || !data) return responseError("Couldn't create a session. Please try again.");


    // Create the Host player
    const playerRes = await createPlayer("Host", data[0].id, supabase);
    if (playerRes.error) {
        return responseError("Couldn't create the Host player. Please try again.");
    }


    return responseSuccess({
        session: data[0],
        user: playerRes.data[0]
    });
  } catch(err) {
    throw(err);
  }
}