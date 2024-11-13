import Image from "next/image";
import Link from "next/link";

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
        <ul className="hidden h-full gap-12 lg:flex"></ul>
      </Link>
    </nav>
  );
};

export default NavBar;
