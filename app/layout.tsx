import "./globals.css";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <aside id="mipi-portal">
        </aside>
        { children }
      </body>
    </html>
  );
}
