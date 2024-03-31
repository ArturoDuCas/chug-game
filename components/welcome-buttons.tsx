"use client";

import Link from "next/link";
import Button from "@/components/button";
import {createSession} from "@/data/session";
import { useToast } from "@/components/ui/use-toast"
import {useState} from "react";
import Spinner from "@/components/spinner";
import {useRouter} from "next/navigation";

const WelcomeButtons = () => {
  const { toast, dismiss } = useToast();
  const router = useRouter()
  const [isCreating, setIsCreating] = useState(false);

  async function handleCreateClick() {
    setIsCreating(true);

    try {
      const res = await createSession();
      if(!res.success) throw "Couldn't create a session.";
      dismiss();
      router.push(`/create${"?key=" + res.data.session.key}`);
    } catch (err) {
      toast({
        title: "An error occurred 🥲",
        description: "Please try again in a few minutes.",
      });
      console.log(err);
      setIsCreating(false);
    }


  }

  return (
      <div className="w-full flex justify-around items-center gap-4">
        <Link href={"/join"} className="flex-1">
          <Button maxWidth>
            <span>Join</span>
          </Button>
        </Link>
        {/*<Link href={"/create"} className="flex-1">*/}
        <Button variant="outlined" maxWidth onClick={handleCreateClick}>
          {isCreating ? (
              <Spinner />
          ) : (
              <span>Create</span>
          )}

        </Button>
        {/*</Link>*/}
      </div>
  );
};

export default WelcomeButtons;