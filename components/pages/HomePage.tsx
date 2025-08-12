"use client"

import Login from "../login/Login";
import { useSession } from "next-auth/react";
const HomePage = () => {
    const { data: session } = useSession();
    return(
        <>
            { session ? 
                <p>You are logged in</p>
                :
                <>
                    <header className="flex flex-col gap-2 self-center text-center py-4">
                        <h1 className="text-xl">Michael in Progress - Internal</h1>
                        <p className="text-xs">Manage blogs, and other data here.</p>
                    </header>
                        <main className="grow content-center items-center self-center">
                        <Login/>
                    </main>
                </>
            }
        </>
    );
}
export default HomePage;