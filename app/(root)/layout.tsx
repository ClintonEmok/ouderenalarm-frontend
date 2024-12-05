import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

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
    url: process.env.NEXT_PUBLIC_BASE_URL, // Vervang met jouw website-URL
    type: "website",
  },

  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("min-h-screen font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <NavBar />
          <main className="relative overflow-hidden min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
