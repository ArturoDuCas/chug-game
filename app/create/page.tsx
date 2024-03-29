import RoomId from "@/components/room-id";
import RoundsInput from "@/components/rounds-input";
import SpecialButton from "@/components/special-button";
import GoBack from "@/components/go-back";
import {Suspense} from "react";

const Page = () => {
  return (
      <div className="w-full p-6 flex flex-col gap-4">
        <GoBack />
          <Suspense fallback={<div>Loading...</div>}>
            <RoomId />
          </Suspense>
        <RoundsInput/>
        <SpecialButton text="Start Now 😈"/>

      </div>
  );
};

export default Page;