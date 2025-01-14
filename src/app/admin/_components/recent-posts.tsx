"use client";

import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Loader2, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import axios from "axios";
import TableSkeleton from "@/loaders/table-skeleton";

interface BlogPost {
    _id: string;
    title: string;
    isDraft: boolean;
    publishDate: string;
    views: string;
}

const RecentPosts = () => {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(false);
    const [isDeleting, setIsDeleting] = useState(false);

    const fetchBlogPosts = async () => {
        try {
            setLoading(true);
            const response = await axios.get("/api/get-admin-posts");
            setBlogPosts(response.data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    const deleteBlogPost = async (id: string) => {
        setIsDeleting(true)

        try {
            const response = await axios.delete(`/api/delete-post/${id}`);

            if (response.data.success) {
                toast.success("Post deleted successfully");
                fetchBlogPosts();
            }

        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred");
        } finally {
            setIsDeleting(false)
        }
    }

    return (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Recent Posts</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr className="bg-gray-50">
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Title
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Author
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Views
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Actions
                            </th>
                        </tr>
                    </thead>
                    {loading ? (
                        <TableSkeleton />
                    ) : (
                        <tbody className="bg-white divide-y divide-gray-200">
                            {blogPosts.map((post) => (
                                <tr key={post.title} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm font-medium text-gray-900">
                                            {post.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="text-sm text-gray-500">Atharv Karnekar</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span
                                            className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${!post.isDraft
                                                ? "bg-green-100 text-green-800"
                                                : "bg-yellow-100 text-yellow-800"
                                                }`}
                                        >
                                            {post.isDraft ? "Draft" : "Published"}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {post.publishDate}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                        {post.views}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-3">
                                        <Button
                                            variant={"outline"}
                                            className="text-red-400 hover:bg-red-500 hover:text-white"
                                            onClick={() => deleteBlogPost(post._id)}
                                            disabled={isDeleting}
                                        >
                                            {isDeleting ? <Loader2 className='animate-spin' /> : <Trash size={16} />}
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    )}
                </table>
            </div>
        </div>
    );
};

export default RecentPosts;
