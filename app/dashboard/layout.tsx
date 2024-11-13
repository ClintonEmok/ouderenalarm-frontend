export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="relative overflow-hidden">
      TOPBAR
      <div>SIDEBAR</div>
      {children}
    </main>
  );
}
