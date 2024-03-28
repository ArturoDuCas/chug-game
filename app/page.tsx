import {Button} from "@/components/ui/button";
import AddPlayer from "@/components/add-player";
import PlayerList from "@/components/player-list";

export default function Home() {
  return (
      <main className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-8xl font-bold">
          Chug.
        </h1>
        <Button size="lg">
              Start
        </Button>
        <AddPlayer/>
        <PlayerList />
      </main>
  );
}
