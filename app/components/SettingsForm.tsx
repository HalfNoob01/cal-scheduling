"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SubmitButton } from "./SubmitButtons";
import { useActionState, useState } from "react";
import { SettingsAction } from "../actions";
import { useForm } from "@conform-to/react";
import { parseWithZod } from "@conform-to/zod";
import { settingsSchema } from "../lib/zodSchemas";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { UploadDropzone } from "../lib/uploadthing";
import { toast } from "sonner";

interface iAppProps {
     fullName : string;
     email : string,
     profileImage : string,
}

export default function SettingsForm ( { email, fullName, profileImage } : iAppProps) {
    const [lastResult, action] = useActionState(SettingsAction, undefined);
    const [currentProfileImage, setCurrentProfileImage] = useState(profileImage);

    const [form, fields] = useForm({
         lastResult,

        onValidate({formData}) {
             return parseWithZod(formData, {
                 schema : settingsSchema
             })
        },
        shouldValidate : "onBlur",
        shouldRevalidate : "onInput"
    })

    const handleDelete = () => {
         setCurrentProfileImage("")
    }
    return (
        <Card>
        <CardHeader>
           <CardDescription>
               Manage your settings!
           </CardDescription>
        </CardHeader>

        <form id={form.id} onSubmit={form.onSubmit} action={action} noValidate>
            <CardContent className="flex flex-col gap-y-4">
                 <div className="flex flex-col gap-y-2">
                     <Label>Full Name</Label>
                     <Input defaultValue={fullName} name={fields.fullName.name} key={fields.fullName.key} placeholder="Your Name" />
                     <p className="text-red-500 text-sm">{fields.fullName.errors}</p>
                 </div>

                 <div className="flex flex-col gap-y-2">
                      <Label>Email</Label>
                      <Input disabled defaultValue={email} placeholder="your-email@email.com"/>
                 </div>

                 <div className="grid gap-y-5">
                   <Label>Profile Image</Label>
                   <input type="hidden" name={fields.profileImage.name} key={fields.profileImage.key} value={currentProfileImage}/>
                   {
                    currentProfileImage ? (
                        <div className="relative size-16">
                             <img src={currentProfileImage} alt="Profile Image" width={100} height={100} className="size-16 rounded-lg" />
                             <Button onClick={handleDelete} type="button" variant="destructive"  className="absolute -top-3 -right-3 size-8 rounded-2xl">
                                <X className="size-6"/>
                             </Button>
                        </div>
                    ) : (
                       <UploadDropzone 
                        onClientUploadComplete={(res) => {
                         setCurrentProfileImage(res[0].url);
                         toast.success("Profile Image has been uploaded");
                        }}
                       onUploadError={(error) => {
                          console.log("Something went wrong", error);
                          toast.error(error.message)
                       }}
                       endpoint="imageUploader"/>
                    )}
                    <p className="text-red-500 text-sm">{fields.profileImage.errors}</p>
                 </div>
            </CardContent>
            <CardFooter>
                  <SubmitButton text="Save Changes"/>
            </CardFooter>
        </form>
     </Card>
    )
}