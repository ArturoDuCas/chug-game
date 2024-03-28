"use client"

import {useState} from "react";
import RoundsInputButton from "@/components/rounds-input-button";

const RoundsInput = () => {
  const [rounds, setRounds] = useState(2);


  return (
      <div className="flex flex-row justify-around items-center">
        <RoundsInputButton type="decrement" rounds={rounds} setter={setRounds}/>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-6xl font-bold">
            {rounds}
          </h3>
          <span className="text-slate-50/80 text-xs">
            Rounds
          </span>
        </div>
        <RoundsInputButton type="increment" rounds={rounds} setter={setRounds}/>
      </div>
  );
};

export default RoundsInput;