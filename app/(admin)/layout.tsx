import CMSNavbar from "@/components/CMSNavbar";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";

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
        className={cn("min-h-screen  font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <CMSNavbar />
          <main className="relative overflow-hidden">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}