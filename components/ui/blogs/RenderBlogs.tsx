"use client"

import { useState, useEffect } from "react";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";

interface Blogs {
    id: string,
    title: string,
    description: string,
    thumbnailUrl: string,
    published: string,
    updated: string,
    content: string
}

const RenderBlogs = () => {

    const [blogs, setBlogs] = useState<Blogs[]>();

    const fetchBlogs = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/blogs");
            const json = await response.json();
            if(response.ok) {
                setBlogs(json.blogs);
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    const handleDelete = async (blogId: string) => {
        const response = await fetch(`http://localhost:3000/api/blogs/${blogId}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if(response.ok && blogs) {
            const filteredListOfBlogs = blogs.filter((blog) => blog.id !== blogId)
            setBlogs(filteredListOfBlogs);
        }
    }

    return(
        <>
            <h2 className="text-xl text-center ">MiP Blogs</h2>
            <ul className="flex flex-col">
                <>
                    {
                        blogs ? 
                        blogs?.map((blog) => {
                            return (
                                <li key={blog.id} className="flex place-content-between grow odd:bg-gray-300 px-2 py-4">
                                    <p className="font-semibold">{ blog.title }</p>
                                    <div className="flex gap-2">
                                        <span className="cursor-pointer">
                                            <EditIcon/>
                                        </span>
                                        <span className="cursor-pointer" onClick={() => {
                                            handleDelete(blog.id);
                                        }}>
                                            <DeleteIcon/>
                                        </span>    
                                    </div>
                                </li>
                            )
                        }) : <p>No entries exist.</p>
                    }
                </>
            </ul>
        </>
    );
}
export default RenderBlogs;