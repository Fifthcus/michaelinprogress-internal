import { NextRequest, NextResponse } from 'next/server'
import blogdb from '@/blogSchema/PrismaClient';

export const GET = async (req: NextRequest, { params }: { params: { blogId: string } }) => {
    const { blogId } = await params;
    try {
        const blog = await blogdb.article.findUnique({
            where: {
                id: blogId
            }
        });
        return NextResponse.json({ blog }, { status: 200 })
    } catch(error) {
        return NextResponse.json({ message: "An error occured fetching this entry." }, { status: 500 });
    }
}

export const PUT = async (req: NextRequest, { params }: { params: { blogId: string } }) => {
    const { blogId } = params;
    const { title, description, content } = await req.json();
    try {
        const blogs = await blogdb.article.update(
            {
                where: {
                    id: blogId
                },        
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

export const DELETE = async (req: NextRequest, { params }: { params: { blogId: string } }) => {
    const { blogId } = params;
    try {
        await blogdb.article.delete({
            where: {
                id: blogId
            }
        });
        return NextResponse.json({ message: "Article deleted successfully." }, { status: 200 });
    } catch(error) {
        return NextResponse.json({ message: "An error occured deleting this entry." }, { status: 500 });
    }
}