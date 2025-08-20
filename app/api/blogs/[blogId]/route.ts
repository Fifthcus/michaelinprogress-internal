import { NextRequest, NextResponse } from 'next/server'
import blogdb from '@/blogSchema/PrismaClient';

export const DELETE = async (req: NextRequest, { params }: { params: { blogId: string } }) => {
    const { blogId } = await params;
    try {
        await blogdb.article.delete({
            where: {
                id: blogId
            }
        });
        return NextResponse.json({ message: "Article deleted successfully." }, { status: 200 })
    } catch(error) {
        return NextResponse.json({ message: "An error occured deleting this entry." }, { status: 500 })
    }
}