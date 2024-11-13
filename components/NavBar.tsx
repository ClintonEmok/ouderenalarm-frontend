import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { User } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="border-2 border-red-500 flexBetween max-container padding-contianer relative z-30 py-5">
      <Link href="/">
        <Image
          src="/assets/icons/logo-full.svg"
          height={120}
          width={120}
          alt="logo"
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button className="bg-blue-700 text-white font-bold">
          <User />
          Login
        </Button>
      </div>
      <Image
        src="/assets/landing/menu.svg"
        height={32}
        width={32}
        alt="menu"
        className="inline-block cursor-pointer lg:hidden"
      />
    </nav>
  );
};

export default NavBar;
