import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";

export const metadata: Metadata = {
  title: {
    default: "OuderenAlarm - Veiligheid en Zorg voor Ouderen",
    template: "%s | OuderenAlarm",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL ?? ""),
  description:
    "OuderenAlarm biedt een compleet platform dat de veiligheid en het welzijn van ouderen verbetert met moderne alarmsystemen en zorgoplossingen.",
  openGraph: {
    title: "OuderenAlarm - Veiligheid en Zorg voor Ouderen",
    description:
      "Verbeter de veiligheid en het welzijn van ouderen met de innovatieve alarmsystemen en zorgoplossingen van OuderenAlarm.",
    url: process.env.NEXT_PUBLIC_BASE_URL,
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
    <ThemeProvider attribute="class" defaultTheme="light">
      <NavBar />
      <main className="relative overflow-hidden min-h-screen">{children}</main>
      <Footer />
    </ThemeProvider>
  );
}
