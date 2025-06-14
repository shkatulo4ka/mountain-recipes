import Link from "next/link";
import { buttonVariants } from "../ui/button";
import { RegisterLink, LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavLink from "./NavLink";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <nav className="py-5 flex items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/">
          <h1 className="text-3xl font-semibold">
            Mountain<span className="text-blue-500">Recipes</span>
          </h1>
        </Link>

        <NavLink href="/" title="home" />
        <NavLink href="/hiking" title="hiking" />
        <NavLink href="/recipes" title="recipes" />
        <NavLink href="/ingredients" title="ingredients" />
      </div>

      {user ? (
        <div className="flex items-center gap-4">
          <p>{user.given_name}</p>
          <LogoutLink className={buttonVariants({ variant: "secondary" })}>Logout</LogoutLink>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <LoginLink className={buttonVariants()}>Login</LoginLink>
          <RegisterLink className={buttonVariants({ variant: "secondary" })}>Register</RegisterLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
