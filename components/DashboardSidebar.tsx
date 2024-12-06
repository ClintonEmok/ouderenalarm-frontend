"use client";
import { Lock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DashboardSidebar = () => {
  const [showDevices, setShowDevices] = useState(false);

  const sidebarClassNames =
    "foxed flex flex-col h-[100%] justify-between shadow-xl transtion-all duration-300 ease-in-out h-full z-40 overflow-y-auto bg-white w-64";
  return (
    <div className={sidebarClassNames}>
      <div className="flex h-[100%] w-full flex-col justify-start">
        {/* TOP LOGO */}
        <div className="z-50 flex min-h-[56px] w-64 items-center justify-between bg-white px-6 pt-3">
          <div className="text-xl font-bold text-gray-800 ">dashboard</div>
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
      </div>
    </div>
  );
};

export default DashboardSidebar;
