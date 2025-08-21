export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="max-w-screen-lg m-auto flex flex-col gap-4 grow w-full h-screen p-4">
        { children }
    </main>
  );
}
