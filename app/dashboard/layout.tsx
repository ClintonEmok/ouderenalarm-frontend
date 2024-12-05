import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import DashboardSidebar from "@/components/DashboardSidebar";
import DashboardNavbar from "@/components/DashboardNavbar";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen font-sans antialiased flex",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          {/* LEFT */}
          <div className="w-1/6 md:w-1/12 lg:w-1/6 bg-red-500">
            <DashboardSidebar />
          </div>
          {/* RIGHT */}
          <div className="w-5/6 md:w-11/12 lg:w-5/6 bg-blue-500 flex flex-col">
            <DashboardNavbar />
            <main className="relative overflow-hidden min-h-screen">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
