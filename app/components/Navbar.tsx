import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/logo.png";
import AuthModel from "./AuthModel";
import { ThemeToggle } from "@/components/theme-toggle";

const Navbar = () => {
  return (
    <div className="flex py-5 items-center justify-between ">
       <Link href='/' className="flex items-center gap-2">
          <Image src={Logo} alt="Logo" className="size-10" />
          <h4 className="text-3xl font-semibold "> Cal<span className="text-blue-500">Scheduling</span></h4>
       </Link>

       <div className="hidden md:flex md:justify-end md:space-x-4">
        <ThemeToggle/>
        <AuthModel/>
       </div>
    

    </div>
  )
}

export default Navbar
