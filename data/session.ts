"use server";

import {createServerActionClient, SupabaseClient} from "@supabase/auth-helpers-nextjs";
import {cookies} from "next/headers";

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

    // if there is a postgres error, throw it
    if (error) throw error;

    return data;

  } catch (err) {
    // if there is any error while fetching the data
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
    let session = await getSessionByKey(key, supabase);
    while(session.length !== 0 && flag > 0) {
      console.log(`Number of tries left: ${flag}`);
      key = generateKey();
      session = await getSessionByKey(key, supabase);
      flag--;
    }

    // If we couldn't generate a unique key, return an empty array
    if (session.length !== 0) {
       return [];
    }


    // Insert the key into the session table
    const {data, error} = await supabase
        .from("session")
        .insert([
          {key: key},
        ])
        .select();

    if (error) {
      return [];
    }

    return data;
  } catch(err) {
    return[];
  }
}