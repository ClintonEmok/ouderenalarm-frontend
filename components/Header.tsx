import Link from "next/link";
import React from "react";

interface HeaderProps {
  title: string;
  topics?: boolean;
}
const Header = ({ title, topics = false }: HeaderProps) => {
  return (
    <header className="py-14 px-4 mb-12 text-center border-b border-blue-700">
      <h2 className="uppercase text-2xl mx-auto max-w-2xl font-bold">
        {title}
      </h2>
      {topics && (
        <div className="text-xs mt-2">
          <Link href="/blog/topic">#topics</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
