import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { DashboardWrapper } from "@/components/DashboardWrapper";
import { Plus_Jakarta_Sans } from "next/font/google";

import { cn } from "@/lib/utils";
import { ToastContainer } from "react-toastify";

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
          "min-h-screen font-sans antialiased w-full",
          fontSans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <ToastContainer />
          <DashboardWrapper>{children}</DashboardWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
