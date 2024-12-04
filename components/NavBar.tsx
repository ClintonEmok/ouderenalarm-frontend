"use client";
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="flexBetween  padding-contianer relative z-30 bg-primary-500">
        <Link href="/">
          {/* TODO: Change logo */}
          <Image
            src="/assets/logos/ouderalarm.png"
            height={80}
            width={80}
            alt="logo"
          />
        </Link>
        <ul className="hidden h-full gap-12  lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="regular-16 text-white flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <div className="lg:flexCenter hidden gap-3">
          {/* Add buttons or additional items if needed */}
        </div>
        <button
          onClick={() => setIsDrawerOpen(true)}
          className="inline-block lg:hidden"
        >
          <Menu size={40} color="#fff" />
        </button>
      </nav>

      {/* Top Drawer */}
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 shadow-lg transform ${
          isDrawerOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform ease-in-out duration-300`}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-gray-700">
          <h5 className="text-lg font-bold text-gray-800 dark:text-white">
            Menu
          </h5>
          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <ul className="p-4 space-y-4">
          {NAV_LINKS.map((link) => (
            <li key={link.key}>
              <Link
                href={link.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400"
                onClick={() => setIsDrawerOpen(false)} // Close drawer on click
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Overlay */}
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={() => setIsDrawerOpen(false)}
        ></div>
      )}
    </>
  );
};

export default NavBar;
