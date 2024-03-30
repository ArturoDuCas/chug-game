import {useState} from "react";
import {createSession} from "@/data/session";
import {useToast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer"

import Spinner from "@/components/spinner";
import Button from "@/components/button";

const WelcomeCreateButton = () => {
    const { toast, dismiss } = useToast();
    const router = useRouter()

    const [isCreating, setIsCreating] = useState(false);


    function askForName() {

    }


    async function handleCreateClick() {
        setIsCreating(true);

        try {
            const res = await createSession();
            if(res.length === 0) throw "Couldn't create a session."
            const session = res[0];
            dismiss();
            router.push(`/create${"?key=" + session.key}`);
        } catch (err) {
            toast({
                title: "An error occurred 🥲",
                description: "Please try again in a few minutes.",
            });
            console.log(err);
        }

        setIsCreating(false);
    }

    return (
        <Drawer>
            <DrawerTrigger className="w-full">
                <Button variant="outlined" maxWidth onClick={askForName}>
                    {isCreating ? (
                        <Spinner />
                    ) : (
                        <span>Create</span>
                    )}
                </Button>
            </DrawerTrigger>
            <DrawerContent className="text-slate-950">
                <DrawerHeader>
                    <DrawerTitle>Are you absolutely sure?</DrawerTitle>
                    <DrawerDescription>This action cannot be undone.</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                    <Button>Submit</Button>
                    <DrawerClose>
                        <Button>Cancel</Button>
                    </DrawerClose>
                </DrawerFooter>
            </DrawerContent>
        </Drawer>


    );
};

export default WelcomeCreateButton;