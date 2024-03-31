import RoomId from "@/components/room-id";
import RoundsInput from "@/components/rounds-input";
import SpecialButton from "@/components/special-button";
import GoBack from "@/components/go-back";
import {Suspense} from "react";
import {Skeleton} from "@/components/ui/skeleton";
import PlayersConnected from "@/components/players-connected";

const Page = () => {
  return (
      <div className="w-full p-6 flex flex-col gap-4">
        <GoBack />
          <Suspense fallback={<Skeleton className="rounded w-full h-[58px]"></Skeleton>}>
            <RoomId />
          </Suspense>
        <RoundsInput/>
          <PlayersConnected />
        <SpecialButton text="Start Now 😈"/>

      </div>
  );
};

export default Page;