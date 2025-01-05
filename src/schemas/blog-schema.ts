import { z } from "zod";

export const blogFormSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title is too long"),
    description: z
        .string()
        .min(1, "Description is required")
        .max(200, "Description is too long"),
    content: z.string().min(1, "Content is required"),
    keywords: z.array(z.string()).min(1, "At least one keyword is required"),
    tags: z.array(z.string()).min(1, 'At least one tag is required'),
    category: z.string().min(1, 'Category is required'),
    slug: z
        .string()
        .min(1, "Slug is required")
        .regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Invalid slug format"),
    coverImage: z.string().url("Invalid URL").optional(),
    publishDate: z.string(),
    isDraft: z.boolean(),
});

export type BlogFormData = z.infer<typeof blogFormSchema>;
