"use client";

import {useEffect, useState} from "react";
import {useSearchParams} from "next/navigation";

import supabase from "@/utils/supabase";
import IPlayer from "@/types/player";



const PlayersConnected = () => {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("key");
    const [players, setPlayers] = useState<IPlayer[]>([])

    useEffect(() => {
        const channel = supabase.channel("players").on("postgres_changes", {
            event: "INSERT",
            schema: "public",
            table: "player",
            filter: `session_id=eq.${sessionId}`
        }, (payload) => {
            setPlayers([...players, payload.new as IPlayer])
        }).subscribe()

        return () => {
            supabase.removeChannel(channel).then(r => console.log({r}));
        }

    }, [supabase, players, setPlayers]);


    return (
        <div>
            <h1>Players Connected</h1>
            <ul>
                {players.map(player => (
                    <li key={player.id}>{player.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default PlayersConnected;