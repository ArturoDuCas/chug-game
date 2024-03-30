"use client";

import Link from "next/link";
import Button from "@/components/button";
import {createSession} from "@/data/session";
import { useToast } from "@/components/ui/use-toast"
import {useState} from "react";
import Spinner from "@/components/spinner";
import {useRouter} from "next/navigation";
import WelcomeCreateButton from "@/components/welcome-create-button";

const WelcomeButtons = () => {






  return (
      <div className="w-full flex justify-around items-center gap-4">
        <Link href={"/join"} className="flex-1">
          <Button maxWidth>
            <span>Join</span>
          </Button>
        </Link>
          <div className="relative">
            <WelcomeCreateButton />
          </div>

        {/*</Link>*/}
      </div>
  );
};

export default WelcomeButtons;