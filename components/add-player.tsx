import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

const AddPlayer = () => {
  return (
      <div className="w-full max-w-sm flex gap-2 justify-center items-center">
        <Input type="text" placeholder="Jugador 1"/>
        <Button size="icon" variant="success">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
          </svg>
        </Button>
      </div>
  );
};

export default AddPlayer;