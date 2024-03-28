import RoomId from "@/components/room-id";
import RoundsInput from "@/components/rounds-input";

const Page = () => {
  return (
      <div className="w-full p-6 flex flex-col gap-4">
        <RoomId rId="1234"/>
        <RoundsInput />

      </div>
  );
};

export default Page;