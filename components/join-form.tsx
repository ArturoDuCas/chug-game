"use client";

import { JoinSchema } from "@/schemas";
import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import { MAX_KEY_LENGTH } from "@/utils/constants";
import SpecialButton from "@/components/special-button";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";
import {Input} from "@/components/ui/input";

const JoinForm = () => {
    const { toast, dismiss } = useToast();
    const form = useForm<z.infer<typeof JoinSchema>>({
        resolver: zodResolver(JoinSchema),
        defaultValues: {
            roomId: "",
            username: "",
        }
    });

    useEffect(() => {
        const errors = form.formState.errors;
        if(errors.roomId) {
            toast({
                title: "Whoops!🥴",
                description: errors.roomId.message || "An error occurred",
            });
        } else if(errors.username) {
            toast({
                title: "Whoops!🥴",
                description: errors.username.message || "An error occurred",
            });
        }
    }, [form.formState.errors]);


    function onSubmit(data: z.infer<typeof JoinSchema>) {
        dismiss();
        console.log(data);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col text-center px-10">
                <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) =>(
                        <FormItem className="mb-12">
                            <h2 className="font-bold text-2xl text-center">What's Your Tavern Name?</h2>
                            <FormControl>
                                <Input placeholder="e.g., Alestorm McFroth" className="text-slate-950" {...field} />
                            </FormControl>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name="roomId"
                    render={({ field }) =>(
                        <FormItem className="mb-4  flex flex-col items-center">
                            <h2 className="font-bold text-4xl text-center">Enter Room ID</h2>
                            <FormControl >
                                <InputOTP maxLength={MAX_KEY_LENGTH} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} className="h-16 w-16 text-5xl"/>
                                        <InputOTPSlot index={1} className="h-16 w-16 text-5xl"/>
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} className="h-16 w-16 text-5xl"/>
                                        <InputOTPSlot index={3} className="h-16 w-16 text-5xl"/>
                                    </InputOTPGroup>
                                </InputOTP>
                            </FormControl>
                        </FormItem>
                )}
                />


                <SpecialButton text="Join 😈" />
            </form>
        </Form>
    );
};

export default JoinForm;