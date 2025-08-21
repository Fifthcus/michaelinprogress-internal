"use client"

import { FormEvent, useState } from "react";
import { useSearchParams, useParams } from 'next/navigation'
import BlogEditorForm from "./BlogEditorForm";

const BlogEditor = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [content, setContent] = useState("");

    const { blogId } = useParams();
    const searchParams = useSearchParams();

    const action = searchParams.get("action");

    const handleNewSubmission = async (event: FormEvent) => {
        event.preventDefault();
        const response = await fetch("http://localhost:3000/api/blogs", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description, content
            })
        });
    }

    const handleEditSubmission = async (event: FormEvent) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title, description, content
            })
        });
    }
    
    return(
        <>
            <h1 className="text-xl font-semibold">{ action === "create" ? "Create New Entry" : "Edit Entry" }</h1>
            <BlogEditorForm blogId={String(blogId)} title={title} setTitle={setTitle} description={description} setDescription={setDescription} content={content} setContent={setContent} buttonText={ action === "create" ? "Post" : "Submit Changes"} handleSubmit={ action === "create" ? handleNewSubmission : handleEditSubmission}/>
        </>
    );
}
export default BlogEditor;