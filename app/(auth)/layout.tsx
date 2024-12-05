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
    title: "Registreren - Veiligheid en Zorg voor Ouderen",
    description:
      "Maak een account aan bij OuderenAlarm en krijg toegang tot innovatieve oplossingen voor de veiligheid en zorg van ouderen.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/register`, // Dynamische URL voor de Register-pagina
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
          <main className="relative overflow-hidden min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
