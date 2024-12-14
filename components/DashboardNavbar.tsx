import { useAppDispatch, useAppSelector } from "@/app/redux";
import { setIsSidebarCollapsed } from "@/state";
import { Menu, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

const DashboardNavbar = () => {
  const dispatch = useAppDispatch();
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );
  return (
    <div className="flex items-center justify-between bg-white px-4 py-3">
      {/* Searchbar */}
      <div className="flex items-center gap-8">
        {/* Sidebar Toggle */}
        {!isSidebarCollapsed ? null : (
          <button
            onClick={() => dispatch(setIsSidebarCollapsed(!isSidebarCollapsed))}
            className="h-min w-min rounded p-2 hover:bg-gray-100"
          >
            <Menu className="h-8 w-8 cursor-pointer" />
          </button>
        )}
        {/* <div className="relative flex h-min w-[200px]">
          <Search
            size={24}
            className="absolute left-[4px] top-1/2 mr-2 h-5 w-5 -translate-y-1/2 transform cursor-pointer  "
          />
          <input
            className="w-full rounded border-none bg-gray-100 p-2 pl-8 placeholder-gray-500 focus:outline-none focus:border-transparent"
            type="search"
            placeholder="Search..."
          />
        </div> */}
      </div>
      {/* Icons */}
      <div className="flex items-center  ">
        <Link
          href="/settings"
          className="h-min w-mi rounded p-2 hover:bg-gray-100"
        >
          <Settings className="h-6 w-6 cursor-pointer" />
        </Link>
        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-ray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
