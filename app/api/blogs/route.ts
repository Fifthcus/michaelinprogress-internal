import { NextRequest, NextResponse } from "next/server";
import blogdb from "@/blogSchema/PrismaClient";

let data = {};

export const GET = async () => {
    try {
        const blogs = await blogdb.article.findMany(
            {
                select: {
                    id: true,
                    title: true
                }
            }
        );
        data = {
            blogs
        };
        return NextResponse.json(data, { status: 200 });
    } catch(error) {
        console.log(error);
    }
    return NextResponse.json({ message: "An error occured while attempting to fetch the requested entries." }, { status: 500 })
}

export const POST = async (req: NextRequest) => {
    const { title, description, content } = await req.json();
    try {
        const blogs = await blogdb.article.create(
            {
                data: {
                    title,
                    description,
                    content,
                    thumbnailUrl: ""
                }
            }
        );
        return NextResponse.json({ message: "Blog entry successfully published." }, { status: 200 });
    } catch(error) {
        console.log(error);
    }
    return NextResponse.json({ message: "An error occured while attempting to publish this entry." }, { status: 500 })
}