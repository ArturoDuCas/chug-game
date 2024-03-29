import RoomId from "@/components/room-id";
import RoundsInput from "@/components/rounds-input";
import SpecialButton from "@/components/special-button";

const Page = () => {
  return (
      <div className="w-full p-6 flex flex-col gap-4">
        <RoomId rId="1234"/>
        <RoundsInput/>
        <SpecialButton text="Start Now 😈"/>

      </div>
  );
};

export default Page;