import RoomId from "@/components/room-id";
import RoundsInput from "@/components/rounds-input";
import SpecialButton from "@/components/special-button";
import GoBack from "@/components/go-back";

const Page = () => {
  return (
      <div className="w-full p-6 flex flex-col gap-4">
        <GoBack />
        <RoomId />
        <RoundsInput/>
        <SpecialButton text="Start Now 😈"/>

      </div>
  );
};

export default Page;