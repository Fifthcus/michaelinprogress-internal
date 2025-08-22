"use client"

import Link from "next/link";
import { redirect } from "next/navigation";
import { useEffect, FormEvent } from "react";

interface BlogEditor {
    blogId: string
    title: string
    setTitle: React.Dispatch<React.SetStateAction<string>>
    description: string
    setDescription: React.Dispatch<React.SetStateAction<string>>
    content: string
    setContent: React.Dispatch<React.SetStateAction<string>>
    buttonText: string
    handleSubmit: (event: FormEvent) => void
}

const BlogEditorForm = ({ blogId, handleSubmit, title, setTitle, description, setDescription, content, setContent, buttonText }: BlogEditor) => {
    useEffect(() => {
        if(blogId) {
            const fetchBlog = async () => {
                const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`);
                const json = await response.json();
                if(json.blog) {
                    setTitle(json.blog.title);
                    setDescription(json.blog.description);
                    setContent(json.blog.content);
                }
            }
            fetchBlog();
        }
    }, []);
    return(
        <article className="h-full">
            <form onSubmit={(event) => { 
                handleSubmit(event);
                redirect("../dashboard");
                }} className="flex flex-col items-center h-full w-full gap-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" value={title ?? ""} onChange={(event) => setTitle(event.target.value)} placeholder="Title of blog entry" className="border border-gray-400 p-2 rounded-lg"/>
                </div>
                <div className="flex flex-col w-full">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" value={description ?? ""} onChange={(event) => setDescription(event.target.value)} placeholder="Description of entry." className="border border-gray-400 p-2 rounded-lg"/>
                </div>
                <div className="flex flex-col w-full h-full">
                    <label htmlFor="entry">Entry</label>
                    <textarea name="entry" id="entry" className="w-full h-full border border-gray-400 rounded-lg p-2" value={content ?? ""} onChange={(event) => {
                        setContent(event.target.value);
                    }}/>
                    <Link href="../dashboard">
                        <p className="hover:underline">Go Back</p>
                    </Link>
                    <button className="bg-blue-400 border-blue-400 text-neutral-50 px-4 py-2 w-fit rounded-lg cursor-pointer">
                        { buttonText }
                    </button>
                </div>
            </form>
        </article>
    );
}

export default BlogEditorForm;