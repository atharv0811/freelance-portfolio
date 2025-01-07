import { NextResponse } from "next/server";
import dbConnect from "@/lib/dbConnect";
import BlogPosts from "@/models/blogpost.model";

type Params = Promise<{ id: string }>

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function DELETE(req: Request, segmentData: { params: Params }) {
    await dbConnect()

    try {
        const params = await segmentData.params;

        const id = params.id;

        const deletePost = await BlogPosts.findByIdAndDelete({ _id: id });

        if (!deletePost) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Post not found"
                },
                {
                    status: 404
                }
            )
        }

        return NextResponse.json(
            {
                success: true,
                message: "Post deleted successfully"
            },
            {
                status: 200
            }
        )

    } catch (error) {
        console.log("Error deleting post", error);
        return NextResponse.json(
            {
                success: false,
                message: "An unexpected error occurred"
            },
            {
                status: 500
            }
        )
    }
}