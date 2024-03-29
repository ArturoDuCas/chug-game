"use client"

import {useSearchParams} from "next/navigation";


const RoomId = () => {
  const searchParams = useSearchParams();
  const roomId = searchParams.get("key");


  return (
      <div className="flex flex-col text-center">
        <span className="text-slate-50/80 text-sm">Room ID</span>
        <div className="p-2 border rounded-xl shadow">
            <span className="text-4xl font-bold">
                {roomId}
            </span>
        </div>
      </div>
  );
};

export default RoomId;