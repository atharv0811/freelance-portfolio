'use client'

import { Card } from "@/components/ui/card";
import { Form } from "@/components/ui/form";
import { Loader2, Save } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import { BlogFormData, blogFormSchema } from "@/schemas/blog-schema";
import { Button } from "@/components/ui/button";
import Metadata from "./_components/metadata";
import Content from "./_components/content";
import PublishSection from "./_components/publish-section";
import { useState } from "react";
import axios from 'axios'
import { toast } from "sonner";

const initialFormData: BlogFormData = {
    title: '',
    description: '',
    content: '',
    keywords: [],
    tags: [],
    category: '',
    slug: '',
    coverImage: '',
    publishDate: new Date().toISOString().split('T')[0],
    isDraft: true,
    readTime: '1',
};

const AddPost = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const form = useForm<BlogFormData>({
        resolver: zodResolver(blogFormSchema),
        defaultValues: initialFormData,
    });

    const onSubmit = async (data: BlogFormData) => {
        setIsSubmitting(true)

        try {
            const response = await axios.post('/api/create-post', data);

            if (response.data.success) {
                form.reset();
                toast.success('Post published successfully');
            }

        } catch (error) {
            console.log(error);

            if (axios.isAxiosError(error) && error.response) {
                toast.error(error.response.data.message);
            } else {
                toast.error('An unexpected error occurred');
            }
        } finally {
            setIsSubmitting(false);
        }
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
                            className="flex items-center gap-2 px-6 py-2.5 bg-[#6930c3] text-white rounded-lg hover:bg-[#471794] transition-colors shadow-sm cursor-pointer"
                        >
                            {
                                isSubmitting ? (
                                    <>
                                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                        Publishing...
                                    </>
                                ) : (
                                    <>
                                        <Save size={20} />
                                        Publish Post
                                    </>
                                )
                            }
                        </Button>
                    </div>
                </form>
            </Form>
        </Card>
    )
}

export default AddPost