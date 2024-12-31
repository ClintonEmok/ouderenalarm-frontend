"use client";
import "../app/globals.css";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import StoreProvider, { useAppSelector } from "@/app/redux";

import { Plus_Jakarta_Sans } from "next/font/google";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div
      className={cn(
        "flex min-h-screen w-full bg-gray-100 text-gray-900",
        fontSans.variable
      )}
    >
      {/* Sidebar Section */}
      <DashboardSidebar />

      <div
        className={`flex flex-col w-full transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? "pl-0" : "md:pl-64"
        }`}
      >
        {/* Top Navbar */}
        <DashboardNavbar />

        {/* Main Content */}
        <main className="relative flex-1 overflow-hidden min-h-screen">
          {children}
        </main>
      </div>
    </div>
  );
}

export const DashboardWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <StoreProvider>
      <DashboardLayout>{children}</DashboardLayout>
    </StoreProvider>
  );
};
