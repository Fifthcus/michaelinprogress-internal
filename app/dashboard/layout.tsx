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
    <main>
        <nav className="p-4">
            <ul className="flex gap-4">
                <li className="flex gap-1 cursor-pointer hover:underline">Blogs<span><EditIcon/></span></li>
                <li className="flex gap-1 cursor-pointer hover:underline">Create New<span><AddIcon/></span></li>
                <li className="ml-auto">
                  <button className="flex gap-1 cursor-pointer" onClick={handleSignOut}>Sign Out<span><SignOutIcon/></span></button>
                </li>
            </ul>
        </nav>
        { children }
    </main>
  );
}
