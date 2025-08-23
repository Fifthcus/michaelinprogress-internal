"use client"

import { useState, useEffect } from "react";
import EditIcon from "../icons/EditIcon";
import DeleteIcon from "../icons/DeleteIcon";
import Link from "next/link";
import orderEntries from "@/components/utilities/orderEntries";

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

    useEffect(() => {
        const fetchBlogs = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/blogs");
            const json = await response.json();
            if(response.ok) {
                const orderedEntries = orderEntries(json.blogs);
                setBlogs(orderedEntries);
            }
        } catch(error) {
            console.log(error);
        }
    }
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
                        blogs && blogs.length !== 0 ?
                        blogs?.map((blog) => {
                            return (
                                <li key={blog.id} className="flex place-content-between grow odd:bg-gray-300 px-2 py-4">
                                    <p className="font-semibold">{ blog.title }</p>
                                    <div className="flex gap-2">
                                        <span className="cursor-pointer">
                                            <Link href={`../blog/${blog.id}`}>
                                                <EditIcon/>
                                            </Link>
                                        </span>
                                        <span className="cursor-pointer" onClick={() => {
                                            handleDelete(blog.id);
                                        }}>
                                            <DeleteIcon/>
                                        </span>    
                                    </div>
                                </li>
                            )
                        })
                        :
                        <li className="text-center py-4">No entries exist</li>
                    }
                </>
            </ul>
        </>
    );
}
export default RenderBlogs;