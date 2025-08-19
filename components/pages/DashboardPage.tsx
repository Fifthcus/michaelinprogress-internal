"use client"

import RenderBlogs from "../ui/blogs/RenderBlogs";

const DashboardPage = () => {
    return(
        <>
            <section className="grow pt-4">
                <RenderBlogs/>
            </section>
            <section className="m-auto p-4">
                <button className="bg-blue-400 border-blue-400 text-neutral-50 px-4 py-2 rounded-lg cursor-pointer">New Entry</button>
            </section>
        </>
    );
}
export default DashboardPage;