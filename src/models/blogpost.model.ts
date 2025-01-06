import { IBlogPost } from "@/types/types";
import mongoose, { Schema, Model } from "mongoose";

const blogPostsSchema: Schema<IBlogPost> = new Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
            maxlength: 100
        },
        description: {
            type: String,
            required: true,
            maxlength: 200
        },
        content: {
            type: String,
            required: true,
        },
        keywords: {
            type: [String],
            required: true,
            validate: {
                validator: (v: string[]) => v.length > 0,
                message: 'At least one keyword is required',
            },
        },
        author: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        tags: {
            type: [String],
            required: [true, 'At least one tag is required'],
            validate: {
                validator: (v: string[]) => v.length > 0,
                message: 'At least one tag is required',
            },
        },
        category: {
            type: String,
            required: true
        },
        slug: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        coverImage: {
            type: String,
            required: true,
            default: ''
        },
        publishDate: {
            type: String,
            required: true,
        },
        isDraft: {
            type: Boolean,
            required: true,
            default: false,
        },
        views: {
            type: Number,
            default: 0
        },
        likes: {
            type: Number,
            default: 0
        }
    },
    {
        timestamps: true
    }
)

const BlogPosts: Model<IBlogPost> = mongoose.models.BlogPosts || mongoose.model<IBlogPost>('BlogPosts', blogPostsSchema);

export default BlogPosts;