import {Button} from "@/components/ui/button";

export default function Home() {
  return (
      <main className="flex flex-col gap-10 justify-center items-center h-screen">
        <h1 className="text-8xl font-bold">
          Chug.
        </h1>
        <div className="flex justify-center gap-4">
          <Button size="lg">Create</Button>
          <Button size="lg" variant="outline">Join</Button>
        </div>
      </main>
  );
}
