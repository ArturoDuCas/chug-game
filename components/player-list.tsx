import PlayerRow from "@/components/player-row";
import {ScrollArea} from "@/components/ui/scroll-area";

const PlayerList = () => {
  return (
      <div className="px-4 w-full">
        <ScrollArea className="w-full h-full max-h-64 rounded bg-slate-50/20">
          <PlayerRow />

          <PlayerRow />
          <PlayerRow />
          <PlayerRow />
          <PlayerRow />
          <PlayerRow />
          <PlayerRow />
          <PlayerRow />
          <PlayerRow />
        </ScrollArea>
        <p className="text-sm text-slate-100/60 text-center mt-2">
          Lista de jugadores
        </p>
      </div>
  );
};

export default PlayerList;