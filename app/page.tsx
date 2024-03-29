import WelcomeButtons from "@/components/welcome-buttons";

export default async function Index() {




  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="w-full bg-slate-50 rounded p-4 shadow">
        <h1 className="text-8xl font-bold tracking-wide bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Chug.</h1>
      </div>
      <WelcomeButtons />
    </div>
  );
}
