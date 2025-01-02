'use client'

import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { BlogFormData, blogFormSchema } from "@/schemas/blog-schema";
import Metadata from "./_components/metadata";
import { Button } from "@/components/ui/button";
import Content from "./_components/content";
import PublishSection from "./_components/publish-section";

const initialFormData: BlogFormData = {
    title: '',
    description: '',
    content: '',
    keywords: [],
    slug: '',
    coverImage: '',
    publishDate: new Date().toISOString().split('T')[0],
    isDraft: true,
};

const AddPost = () => {
    const form = useForm<BlogFormData>({
        resolver: zodResolver(blogFormSchema),
        defaultValues: initialFormData,
    });

    const onSubmit = (data: BlogFormData) => {
        console.log('Form submitted:', data);
    };

    return (
        <Card className='p-3 rounded-md bg-gray-100 overflow-scroll h-[84vh] no-scrollbar'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-8">
                        <Metadata form={form} />
                        <Content form={form} />
                        <PublishSection form={form} />
                    </div>
                    <div className="flex justify-end items-center mt-4">
                        <Button
                            type="submit"
                            className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
                        >
                            <Save size={20} />
                            Publish Post
                        </Button>
                    </div>
                </form>
            </Form>
        </Card>
    )
}

export default AddPost