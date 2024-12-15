import "../globals.css";

import { ThemeProvider } from "@/components/theme-provider";

import { DashboardWrapper } from "@/components/DashboardWrapper";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <DashboardWrapper>{children}</DashboardWrapper>
    </ThemeProvider>
  );
}
