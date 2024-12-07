"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import {
  Cog,
  Home,
  Icon,
  Lock,
  LucideIcon,
  MonitorCheck,
  Settings,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { string } from "zod";

const DashboardSidebar = () => {
  const [showDevices, setShowDevices] = useState(false);
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  const sidebarClassNames = `fixed flex flex-col h-[100%] justify-between shadow-xl transtion-all duration-600 ease-in-out h-full z-40 overflow-y-auto bg-white  ${isSidebarCollapsed ? "w-0 hidden" : "w-64"}`;
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3">
          <div className="text-xl font-bold text-gray-800 ">dashboard</div>
          {isSidebarCollapsed ? null : (
            <button
              className="py-3"
              onClick={() =>
                dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))
              }
            >
              <X className="h-6 w-6 text-gray-800 hover:text-gray-500" />
            </button>
          )}
        </div>
        {/* TEAM */}
        <div className="flex items-center gap-5 border-y-[1.5px] border-gray-200 px-6 py-4">
          {/* Image placeholder */}
          <Image src="/next.svg" alt="team" width={30} height={30} />
          <div>
            <h3 className="text-md font-bold tracking-wide ">Ouder team</h3>
            <div className="mt-1 flex items-start gap-2">
              <Lock className="mt-[0.1rem] h-3 w-3 text-gray-500" />
              <p className="text-xs text-gray-500">Private</p>
            </div>
          </div>
        </div>
        {/* NAVBAR LINKS */}
        <nav className="z-10 w-full ">
          <SidebarLink href="/dashboard" icon={Home} label="Dashboard" />
          <SidebarLink
            href="/devices"
            icon={MonitorCheck}
            label="Managed Care"
          />
          <SidebarLink href="/settings" icon={Settings} label="Settings" />
        </nav>
      </div>
    </div>
  );
};

interface SidebarLinkProps {
  href: string;
  icon: LucideIcon;
  label: string;
}

const SidebarLink = ({ href, icon: Icon, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive =
    pathname === href || (pathname === "/" && href === "/dashboard");

  return (
    <Link href={href} className="w-full">
      <div
        className={`relative flex cursor-pointer items-center gap-3 transition-colors
        hover:bg-gray-100 ${isActive ? "bg-gray-100 text-white" : ""} justify-start px-8 py-3`}
      >
        {isActive && (
          <div className="absolute left-0 top-0 h-[100%] w-[5px] bg-blue-200"></div>
        )}

        <Icon size={24} className="h-6 w-6 text-gray-800" />
        <span className={`font-medium text-gray-800`}>{label}</span>
      </div>
    </Link>
  );
};

export default DashboardSidebar;
