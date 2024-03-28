interface RoomIdProps {
  rId: string;
}

const RoomId = ({rId} : RoomIdProps) => {
  console.log(rId);
  return (
      <div className="flex flex-col text-center">
        <span className="text-slate-50/80 text-sm">Room ID</span>
        <div className="p-2 border rounded-xl shadow">
            <span className="text-4xl font-bold">
              {rId}
            </span>
        </div>
      </div>
  );
};

export default RoomId;