import KeyInput from "@/components/key-input";
import { Input } from "@/components/ui/input"

import GoBack from "@/components/go-back";
import SpecialButton from "@/components/special-button";
import JoinForm from "@/components/join-form";

const Page = () => {
  return (
      <div className="w-full">
          <GoBack />
          <JoinForm />
          <Input placeholder="Your name"/>
      </div>
  );
};

export default Page;