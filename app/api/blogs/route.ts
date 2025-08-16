import { NextResponse } from "next/server";
import blogdb from "@/blogSchema/PrismaClient";

let data = {};

export const GET = async () => {
    try {
        const blogs = await blogdb.article.findMany();
        data = {
            blogs
        };
        return NextResponse.json(data, { status: 200 });
    } catch(error) {
        console.log(error);
    }
    return NextResponse.json({}, { status: 500 })
}