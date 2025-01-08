"use client";

import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import BlogPostSidebar from "./_components/blogpost-sidebar";
import axios from "axios";
import parse from "html-react-parser";
import PostSkeleton from "@/loaders/post-skeleton";

type Params = Promise<{ slug: string }>;
type Post = {
    title: string;
    content: string;
    tags: string[];
};

export default function BlogPost(segmentData: { params: Params }) {
    const [post, setPost] = useState<Post | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchPost() {
            setLoading(true);
            const params = await segmentData.params;
            const slug = params.slug;
            try {
                const response = await axios.get(`/api/get-post/${slug}`);
                setPost(response.data.data);
            } catch (error) {
                console.error("Error", error);
            }
            setLoading(false);
        }
        fetchPost();
    }, []);

    return (
        <div className="min-h-screen bg-[#f7fbfe]">
            <div className="max-w-[1200px] mx-auto px-4 py-8">
                <div className="flex flex-col lg:flex-row gap-8">
                    <main className="lg:w-2/3">
                        {loading ? (
                            <PostSkeleton />
                        ) : (
                            <Card className="max-w-[1000px] mx-auto py-8 px-6">
                                <article className="max-w-2xl mx-auto">
                                    {post && (
                                        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
                                    )}

                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center space-x-4">
                                            <Avatar>
                                                <AvatarFallback>A</AvatarFallback>
                                            </Avatar>
                                            <div>
                                                <p className="font-semibold">Atharv Karnekar</p>
                                                <p className="text-sm text-gray-500"></p>
                                            </div>
                                        </div>
                                        <Button variant="outline" size="sm">
                                            <Share2 className="mr-2 h-4 w-4" />
                                            Share
                                        </Button>
                                    </div>

                                    {post && (
                                        <div className="prose max-w-none mb-6">
                                            {parse(post.content)}
                                        </div>
                                    )}

                                    {post && (
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {post.tags.map((tag) => (
                                                <Badge key={tag} variant="secondary">
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>
                                    )}
                                </article>
                            </Card>
                        )}
                    </main>
                    <aside className="lg:w-1/3">
                        <BlogPostSidebar />
                    </aside>
                </div>
            </div>
        </div>
    );
}
