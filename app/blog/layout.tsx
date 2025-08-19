export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="max-w-screen-lg m-auto flex flex-col gap-8 grow w-full h-screen">
        { children }
    </main>
  );
}
