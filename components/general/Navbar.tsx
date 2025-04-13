import Link from "next/link"
import { Button, buttonVariants } from "../ui/button"
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

const Navbar = () => {
  return (
    <nav className="py-5 flex items-center justify-between">
        <div className="flex items-center gap-6">
            <Link href='/'>
                <h1 className="text-3xl font-semibold">
                    Mountain<span className="text-blue-500">Recipes</span>
                </h1>
            </Link>
        
            <div className="hidden sm:flex items-center gap-6">
                <Link
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                    href='/'
                >
                    Home
                </Link>
            </div>
             <div className="hidden sm:flex items-center gap-6">
                <Link
                    className="text-sm font-medium hover:text-blue-500 transition-colors"
                    href='/ingredients'
                >
                    Ingredients
                </Link>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <LoginLink className={buttonVariants()}>Login</LoginLink>
            <RegisterLink className={buttonVariants({variant: "secondary"})}>Register</RegisterLink>
        </div>
    </nav>
  )
}

export default Navbar