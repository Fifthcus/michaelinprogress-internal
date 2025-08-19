"use client"

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BlogEditor = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const searchParams = useSearchParams();

    const action = searchParams.get("action");
    return(
        <article className="h-full p-4">
            <form className="flex flex-col items-center h-full w-full gap-4">
                {
                    action === "create" ? 
                        <div className="flex flex-col w-full">
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title of blog entry" className="border border-gray-400 p-2 rounded-lg"/>
                        </div>
                    :
                        <div className="flex flex-col w-full">
                            <p>Title of Blog</p>
                        </div>
                }
                <div className="flex flex-col w-full h-full">
                    <label htmlFor="entry">{ action === "edit" ? "Edit this entry" : "Create new entry" }</label>
                    <textarea name="" id="entry" className="w-full h-full border border-gray-400 rounded-lg p-2" value={content} onChange={(event) => {
                        setContent(event.target.value);
                    }}/>
                    <Link href="../dashboard">
                        <p className="hover:underline">Go Back</p>
                    </Link>
                    {   action === "edit" ? 
                            <button className="bg-blue-400 border-blue-400 text-neutral-50 px-4 py-2 w-fit rounded-lg cursor-pointer">Save Changes</button>
                            :
                            <button className="bg-blue-400 border-blue-400 text-neutral-50 px-4 py-2 w-fit rounded-lg cursor-pointer">Submit New Blog</button>
                    }
                </div>
            </form>
        </article>
    );
}
export default BlogEditor;