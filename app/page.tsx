import Button from "@/components/button";
import LinkTransition from "@/utils/LinkTransition";

export default async function Index() {

  return (
    <div className="flex flex-col gap-4">
      <div className="w-full bg-slate-50 rounded p-4 shadow">
        <h1 className="text-8xl font-bold tracking-wide bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Chug.</h1>
      </div>
      <div className="w-full flex justify-around items-center gap-4">
        <LinkTransition href={"/join"} className="flex-1">
          <Button text="Join"  maxWidth />
        </LinkTransition>
        <LinkTransition href={"/create"} className="flex-1">
          <Button text="Create" variant="outlined" maxWidth />
        </LinkTransition>
      </div>
    </div>
  );
}
