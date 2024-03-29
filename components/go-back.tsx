"use client";

import { useRouter } from "next/navigation";

const GoBack = () => {
  const router = useRouter();
  const handleClick = () => router.back();

  return (
      <button className="flex items-center gap-2 absolute top-10 text-sm font-bold hover:border-b pb-1" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor"
             className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"/>
        </svg>
        <span>Go Back</span>
      </button>
  );
};

export default GoBack;