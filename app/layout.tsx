import "./globals.css";
import SessionProviderWrapper from "@/components/utilities/SessionProviderWrapper";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <SessionProviderWrapper>
          <aside id="mipi-portal">
          </aside>
          { children }
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
