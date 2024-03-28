"use client";

import {useEffect, useState} from "react";

const MAX_ROUNDS = 6;
const MIN_ROUNDS = 1;

interface RoundsInputButtonProps {
  type: "increment" | "decrement";
  rounds: number;
  setter: (value: number) => void;
}


const RoundsInputButton = ({type, setter, rounds} : RoundsInputButtonProps) => {
  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    // check if round is at max or min
    if (type === "increment") setIsDisabled(rounds === MAX_ROUNDS);
    else setIsDisabled(rounds === MIN_ROUNDS);
  }, [rounds]);

  function handleClick() {
    if (type === "increment")
        setter(rounds + 1);
    else
        setter(rounds - 1);
}

  return (
      <div>
        <button className="rounded-full p-2 bg-slate-50 text-slate-950 shadow active:bg-slate-200 disabled:opacity-80 disabled:cursor-not-allowed transition-colors" onClick={handleClick} disabled={isDisabled}>
          {type === "increment" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14"/>
            </svg>
          )}
        </button>
      </div>
  );
};

export default RoundsInputButton;