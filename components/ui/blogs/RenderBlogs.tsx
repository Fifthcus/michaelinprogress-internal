"use client"

import { useState, useEffect } from "react";

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
                console.log(json.blogs);
                setBlogs(json.blogs);
            }
        } catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);

    return(
        <>
            <ul>
                <>
                    {
                        blogs ? 
                        blogs?.map((blog) => {
                            return <li key={blog.id}>{ blog.title }</li>
                        }) : <p>No blogs exist.</p>
                    }
                </>
            </ul>
        </>
    );
}
export default RenderBlogs;