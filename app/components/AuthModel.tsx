import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import Logo from '@/public/logo.png';
import { signIn } from "../lib/auth";
import { GitHubAuthButton, GoogleAuthButton } from "./SubmitButtons";
const AuthModel = () => {

  return (
    <Dialog>
       <DialogTrigger asChild>
         <Button>Try For Free</Button>
       </DialogTrigger>

       <DialogContent className="sm:max-w-[360px]">
              
            <DialogTitle hidden>this is just for solving a error</DialogTitle>

           <DialogHeader className="flex flex-row items-center justify-center gap-2">
               <Image src={Logo} alt="Logo"  className="size-10" />
                 <h4 className="text-3xl font-semibold">Cal<span className="text-primary">Scheduling</span></h4>
           </DialogHeader>
           <div className="flex flex-col mt-5 gap-5">
             <form action={ async () => {
                 "use server"
                 await signIn("google")
             } } className="w-full">
                <GoogleAuthButton />
             </form>
                <form action={ async () => {
                 "use server"
                 await signIn("github")
             } } >
                   <GitHubAuthButton/>
                </form>
           </div>
       </DialogContent>
    </Dialog>
  )
}

export default AuthModel
