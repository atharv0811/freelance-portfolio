import dbConnect from "@/lib/dbConnect";
import BlogPosts from "@/models/blogpost.model";
import { NextResponse } from "next/server";

type Params = Promise<{ slug: string }>

export async function GET(req: Request, segmentData: { params: Params }) {
    dbConnect();

    try {
        const params = await segmentData.params;

        const slug = params.slug;

        const post = await BlogPosts.findOne({ slug });

        if (!post) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Post not found",
                },
                {
                    status: 404
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Post found successfully",
                data: post
            },
            {
                status: 200
            }
        );

    } catch (error) {
        if (error instanceof Error) {
            return NextResponse.json(
                {
                    success: false,
                    message: "An error occurred while fetching post",
                    error: error.message
                },
                {
                    status: 500
                }
            );
        } else {
            return NextResponse.json(
                {
                    success: false,
                    message: "An unknown error occurred",
                    error: String(error)
                },
                {
                    status: 500
                }
            );
        }
    }
}