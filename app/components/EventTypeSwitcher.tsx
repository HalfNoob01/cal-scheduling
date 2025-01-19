'use client';

import { Switch } from "@/components/ui/switch";

import {startTransition, useActionState, useEffect } from "react";
import { UpdateEventTypeStatusAction } from "../actions";
import { toast } from "sonner";
export function MenuActiveSwitch ({ initialChecked, eventTypeId } : {
    initialChecked : boolean, eventTypeId : string
} ) {
    const [ state, action, isPending ] = useActionState(UpdateEventTypeStatusAction, undefined)
    const handleCheckedChange = (isChecked : boolean) => {
          startTransition(() =>{
            action({
                eventTypeId : eventTypeId,
                isChecked : isChecked
             });
          })
    }

    useEffect(() => {
     if(state?.status === "success") {
         toast.success(state.message);
     } else if(state?.status === "error") {
        toast.error(state.message)
     }
    }, [state])
    return (
        <Switch disabled={isPending} defaultChecked={initialChecked} onCheckedChange={(isChecked) => handleCheckedChange(isChecked)} />
    )
}

