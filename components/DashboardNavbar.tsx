import { useAppDispatch, useAppSelector } from "@/app/redux";
import { useAuth } from "@/hooks/auth";
import { setIsSidebarCollapsed } from "@/state";
import { LogOut, Menu, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const DashboardNavbar = () => {
  const dispatch = useAppDispatch();
  const { logout } = useAuth({});
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
      </div>
      {/* Icons */}
      <div className="flex items-center  ">
        <Link
          href="/dashboard/settings"
          className="h-min w-min rounded p-2 hover:bg-gray-100"
        >
          <Settings className="h-6 w-6 cursor-pointer" />
        </Link>
        <Button
          onClick={logout}
          className="h-min w-min rounded p-2 hover:bg-gray-100 shadow-none"
        >
          <LogOut className="h-6 w-6 cursor-pointer" />
        </Button>

        <div className="ml-2 mr-5 hidden min-h-[2em] w-[0.1rem] bg-ray-200 md:inline-block"></div>
      </div>
    </div>
  );
};

export default DashboardNavbar;
