import dbConnect from "@/lib/dbConnect";
import BlogPosts from "@/models/blogpost.model";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/options";

export async function POST(req: Request) {
    await dbConnect();

    try {
        const session = await getServerSession(authOptions);

        if (!session || !session.user) {
            return NextResponse.json(
                {
                    success: false,
                    message: "You need to be logged in to publish a post",
                },
                {
                    status: 401
                }
            );
        }

        const { title, description, content, keywords, tags, category, slug, coverImage, publishDate, isDraft, } = await req.json();

        if (!title || !description || !content || !keywords || !tags || !category || !slug || !coverImage || !publishDate) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Please fill all required fields",
                },
                {
                    status: 400
                }
            );
        }

        const existingSlug = await BlogPosts.findOne({ slug });

        if (existingSlug) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Slug is already in use. Please choose a different slug.",
                },
                {
                    status: 400
                }
            );
        }

        const post = new BlogPosts({
            title,
            description,
            content,
            keywords,
            author: session.user._id,
            tags,
            category,
            slug,
            coverImage,
            publishDate,
            isDraft,
        });

        await post.save();

        return NextResponse.json(
            {
                success: true,
                message: "Post published successfully",
            },
            {
                status: 201
            }
        );
    } catch (error) {
        console.log("Error publishing post", error);
        return NextResponse.json(
            {
                success: false,
                message: "An error occurred while creating the post",
            },
            {
                status: 500
            }
        )
    }
}
