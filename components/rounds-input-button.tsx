"use client";

import { useToast } from "@/components/ui/use-toast";

const MAX_ROUNDS = 6;
const MIN_ROUNDS = 1;

interface RoundsInputButtonProps {
  type: "increment" | "decrement";
  rounds: number;
  setter: (value: number) => void;
}


const RoundsInputButton = ({type, setter, rounds} : RoundsInputButtonProps) => {
  const { toast, dismiss } = useToast();


  function handleClick() {
    if (type === "increment") {
      if (rounds === MAX_ROUNDS) {
        toast({
          title: "Uh oh! ",
          description: "This is the maximum number of rounds 😅",
        });
      } else {
        dismiss();
        setter(rounds + 1);
      }
    } else {
      if (rounds === MIN_ROUNDS) {
        toast({
          title: "Uh oh! ",
          description: "This is the minimum number of rounds 😅",
        });
      } else {
        dismiss();
        setter(rounds - 1);
      }
    }
}

  return (
      <div>
        <button
            className="rounded-full p-2 bg-slate-50 text-slate-950 shadow active:bg-slate-200 transition-colors"
            onClick={handleClick}
        >
          {type === "increment" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                   stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
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