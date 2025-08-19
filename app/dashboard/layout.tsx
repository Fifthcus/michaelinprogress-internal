"use client"

import EditIcon from "../../components/ui/icons/EditIcon";
import AddIcon from "../../components/ui/icons/AddIcon";
import SignOutIcon from "@/components/ui/icons/SignOut";
import { signOut } from "next-auth/react";

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/"
    });
  }
  return (
    <main className="h-screen flex flex-col">
      <nav className="p-4 border-b border-gray-400">
        <ul className="flex gap-4">
          <li className="flex gap-1 cursor-pointer hover:underline">New Entry<span><AddIcon/></span></li>
          <li className="ml-auto">
            <button className="flex gap-1 cursor-pointer" onClick={handleSignOut}>Sign Out<span><SignOutIcon/></span></button>
          </li>
        </ul>
      </nav>
      <section className="max-w-screen-lg m-auto flex flex-col gap-8 grow w-full">
        { children }
      </section>
    </main>
  );
}
