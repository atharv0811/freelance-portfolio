import { Types } from "mongoose";
import { IComment } from "./comments";

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
}

export interface IBlogPost extends Document {
    title: string;
    description: string;
    content: string;
    keywords: string[];
    author: Types.ObjectId;
    tags: string[];
    category: string;
    slug: string;
    coverImage?: string;
    publishDate: string;
    isDraft: boolean;
    views: number;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;
}