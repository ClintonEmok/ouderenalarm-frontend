import "./globals.css";
import { ReactNode } from "react";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});
export const metadata = {
  title: "My Next.js App",
  description: "A simple app using Next.js 13 Layouts",
};

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={cn(
          "min-h-screen font-sans antialiased flex",
          fontSans.variable
        )}
      >
        <main className="container mx-auto py-10 px-4">{children}</main>
      </body>
    </html>
  );
};

export default Layout;
