"use client"

import { FormEvent, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

const BlogEditor = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");
    const searchParams = useSearchParams();

    const action = searchParams.get("action");

    const handleEditSubmission = async (event: FormEvent) => {

    }
    const handleNewSubmission = async (event: FormEvent) => {
        event.preventDefault();
        const response = fetch("http://localhost:3000/api/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description, content
            })
        });
    }
    return(
        <article className="h-full p-4">
            <form onSubmit={ action === "create" ? (event) => { handleNewSubmission(event) }: handleEditSubmission } className="flex flex-col items-center h-full w-full gap-4">
                <div className="flex flex-col w-full">
                    { action === "create" ?
                        <>
                            <label htmlFor="title">Title</label>
                            <input type="text" name="title" id="title" value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title of blog entry" className="border border-gray-400 p-2 rounded-lg"/>
                        </>
                        :
                        <p>Title of Blog</p>
                    }
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description} onChange={(event) => setDescription(event.target.value)} placeholder="Description of entry." className="border border-gray-400 p-2 rounded-lg"/>
                </div>
                <div className="flex flex-col w-full h-full">
                    <label htmlFor="entry">{ action === "edit" ? "Edit this entry" : "Create new entry" }</label>
                    <textarea name="" id="entry" className="w-full h-full border border-gray-400 rounded-lg p-2" value={content} onChange={(event) => {
                        setContent(event.target.value);
                    }}/>
                    <Link href="../dashboard">
                        <p className="hover:underline">Go Back</p>
                    </Link>
                    <button className="bg-blue-400 border-blue-400 text-neutral-50 px-4 py-2 w-fit rounded-lg cursor-pointer">
                        { action === "edit" ? "Save Changes" : "Post" }
                    </button>
                </div>
            </form>
        </article>
    );
}
export default BlogEditor;