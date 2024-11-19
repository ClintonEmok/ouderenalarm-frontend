import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { ShoppingBag, User } from "lucide-react";

const NavBar = () => {
  return (
    <nav className="flexBetween max-container padding-contianer relative z-30 py-5 px-3">
      <Link href="/">
        {/* TODO: Change logo */}
        {/* <Image
          src="/assets/landing/hilink-logo.svg"
          height={120}
          width={120}
          alt="logo"
        /> */}
        OUDERENALARM
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
      <div className="lg:flexCenter hidden gap-3">
        {/* <Button className="bg-blue-700 text-white font-bold">
          <User />
          Login
        </Button> */}

        {/* <ShoppingBag color="#1d4ed8" /> */}
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
