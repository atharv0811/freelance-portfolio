import dbConnect from "@/lib/dbConnect";
import BlogPosts from "@/models/blogpost.model";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: Request) {
    await dbConnect();

    try {
        const posts = await BlogPosts.find().populate("author", "name");

        if (!posts) {
            return NextResponse.json(
                {
                    success: false,
                    message: "No posts found",
                    posts: [],
                },
                {
                    status: 404
                }
            );
        }

        return NextResponse.json(
            {
                success: true,
                message: "Posts fetched successfully",
                data: posts,
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
                    message: "An error occurred while fetching posts",
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