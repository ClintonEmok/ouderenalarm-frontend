import "./globals.css";
import { ReactNode } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { ToastContainer } from "react-toastify";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
export const metadata: Metadata = {
  title: {
    default: "OuderenAlarm - Veiligheid en Zorg voor Ouderen",
    template: "%s | OuderenAlarm",
  },
  description:
    "OuderenAlarm biedt een compleet platform dat de veiligheid en het welzijn van ouderen verbetert met moderne alarmsystemen en zorgoplossingen.",
  openGraph: {
    title: "OuderenAlarm - Veiligheid en Zorg voor Ouderen",
    description:
      "Verbeter de veiligheid en het welzijn van ouderen met de innovatieve alarmsystemen en zorgoplossingen van OuderenAlarm.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
    type: "website",
    locale: "nl_NL",
    siteName: "OuderenAlarm",
  },

  robots: "index, follow",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
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
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default Layout;
