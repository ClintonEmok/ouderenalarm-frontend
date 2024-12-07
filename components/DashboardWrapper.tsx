"use client";
import "../app/globals.css";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";
import StoreProvider, { useAppSelector } from "@/app/redux";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isSidebarCollapsed = useAppSelector(
    (state) => state.global.isSidebarCollapsed
  );

  return (
    <div className="flex min-h-screen w-full bg-gray-50 text-gray-900">
      <DashboardSidebar />
      <div
        className={`flex flex-col w-full ${isSidebarCollapsed ? "" : "pl-64"}`}
      >
        <DashboardNavbar />
        <main className="relative overflow-hidden min-h-screen">
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
