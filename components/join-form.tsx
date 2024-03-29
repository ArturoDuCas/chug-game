"use client";

import KeyInput from "@/components/key-input";
import { JoinSchema } from "@/schemas";
import { z } from "zod";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {Form, FormControl, FormDescription, FormField, FormItem, FormLabel} from "@/components/ui/form";
import {InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot} from "@/components/ui/input-otp";
import { MAX_KEY_LENGTH } from "@/utils/constants";
import SpecialButton from "@/components/special-button";
import {useEffect} from "react";
import {useToast} from "@/components/ui/use-toast";

const JoinForm = () => {
    const { toast, dismiss } = useToast();
    const form = useForm<z.infer<typeof JoinSchema>>({
        resolver: zodResolver(JoinSchema),
        defaultValues: {
            roomId: "",
        }
    });

    useEffect(() => {
        const errors = form.formState.errors;
        if(errors.roomId) {
            toast({
                title: "Whoops!🥴",
                description: errors.roomId.message || "An error occurred",
            });
        }
    }, [form.formState.errors]);


    function onSubmit(data: z.infer<typeof JoinSchema>) {
        dismiss()
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col items-center gap-4">
                <FormField
                    control={form.control}
                    name="roomId"
                    render={({ field }) =>(
                        <FormItem>
                            <h2 className="font-bold">Enter Room ID</h2>
                            <FormControl>
                                <InputOTP maxLength={MAX_KEY_LENGTH} {...field}>
                                    <InputOTPGroup>
                                        <InputOTPSlot index={0} />
                                        <InputOTPSlot index={1} />
                                    </InputOTPGroup>
                                    <InputOTPSeparator />
                                    <InputOTPGroup>
                                        <InputOTPSlot index={2} />
                                        <InputOTPSlot index={3} />
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