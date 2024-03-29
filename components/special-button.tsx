interface SpecialButtonProps {
  text: string;
}

const SpecialButton = ({ text }: SpecialButtonProps) => {
  return (
        <button
            className="animate-border inline-block rounded bg-white bg-gradient-to-r from-green-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-1"
        >
          <span
              className="block rounded bg-slate-50 p-2 font-bold text-slate-950"
          >
            {text}
          </span>
        </button>
  );
};

export default SpecialButton;