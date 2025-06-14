import { capitalizeFirstLetter } from "@/app/utils/helpers";
import Link from "next/link";

interface INavLink {
  href: string;
  title: string;
}

const NavLink = ({ href, title }: INavLink) => (
  <div className="hidden sm:flex items-center gap-6">
    <Link className="text-sm font-medium hover:text-blue-500 transition-colors" href={href}>
      {capitalizeFirstLetter(title)}
    </Link>
  </div>
);

export default NavLink;
