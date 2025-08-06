import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="h-screen flex flex-col">
        <header className="flex flex-col gap-2 self-center text-center py-4">
          <h1 className="text-xl">Michael in Progress - Internal</h1>
          <p className="text-xs">Manage blogs, and other data here.</p>
        </header>
        <main className="grow content-center items-center self-center">
          <button className="bg-blue-400 border border-blue-400 text-gray-50 py-2 px-6 rounded-lg cursor-pointer">Log In</button>
        </main>
      </body>
    </html>
  );
}
