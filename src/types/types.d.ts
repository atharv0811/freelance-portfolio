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
    tags: string[];
    category: string;
    slug: string;
    coverImage?: string;
    publishDate: string;
    isDraft: boolean;
    readTime: string;
    views: number;
    likes: number;
    createdAt?: Date;
    updatedAt?: Date;
}