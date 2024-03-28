import {Button} from "@/components/ui/button";
import AddPlayer from "@/components/add-player";

export default function Home() {
  return (
      <main className="flex flex-col gap-4 justify-center items-center h-screen">
        <h1 className="text-8xl font-bold text-slate-100">
          Chug.
        </h1>
        <Button className="dark" size="lg">
              Start
        </Button>
        <AddPlayer/>
      </main>
  );
}
