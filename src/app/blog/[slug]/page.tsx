"use client";

import { useEffect, useState } from "react";
import { Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { okaidia } from "react-syntax-highlighter/dist/esm/styles/prism";
import axios from "axios";
import parse, { domToReact } from "html-react-parser";
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

    const renderContent = (content: string) => {
        return parse(content, {
            replace: (domNode: any) => {
                if (domNode.name === "pre" && domNode.children?.[0]?.name === "code") {
                    const codeContent = domToReact(domNode.children[0].children);
                    const language = domNode.children[0].attribs.class?.replace("language-", "") || "javascript";

                    return (
                        <SyntaxHighlighter
                            language={language}
                            style={okaidia}
                            showLineNumbers
                            lineNumberStyle={{
                                color: "#888",
                                paddingRight: "10px",
                                userSelect: "none",
                            }}
                            className="rounded-lg p-4"
                        >
                            {typeof codeContent === 'string' ? codeContent : codeContent.toString()}
                        </SyntaxHighlighter>
                    );
                }
            },
        });
    };

    return (
        <div className="min-h-screen bg-[#f7fbfe]">
            <div className="max-w-[1200px] mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-8">
                    <main className="w-full">
                        {loading ? (
                            <PostSkeleton />
                        ) : (
                            <Card className="max-w-[1000px] mx-auto py-8 px-6">
                                <article className="max-w-2xl mx-auto">
                                    {post && (
                                        <h1 className="text-2xl md:text-4xl font-bold mb-4">{post.title}</h1>
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
                                            {renderContent(post.content)}
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
                </div>
            </div>
        </div>
    );
}
