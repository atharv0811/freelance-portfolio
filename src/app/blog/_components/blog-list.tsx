import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import BlogCard from "./blog-card";
import axios from "axios";
import PaginationComponent from "./pagination-component";
import BlogCardSkeleton from "@/loaders/blog-post-skeleton";

export default function BlogList({ searchQuery }: { searchQuery: string }) {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 5;

    const fetchBlogPosts = async () => {
        try {
            setLoading(true)
            const response = await axios.get("/api/get-posts");
            setBlogPosts(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error(error);
            setError("Failed to fetch blog posts. Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchBlogPosts();
    }, []);

    const filteredPosts = blogPosts.filter(
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (post: any) =>
            post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Calculate posts for the current page
    const startIndex = (currentPage - 1) * postsPerPage;
    const currentPosts = filteredPosts.slice(startIndex, startIndex + postsPerPage);

    // Total pages
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-[#6930c3]">
                {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Posts"}
            </h2>
            {loading ? (
                <BlogCardSkeleton />
            ) : error ? (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <p className="text-red-600">{error}</p>
                    <Button
                        onClick={fetchBlogPosts}
                        variant='outline'
                        className="px-4 py-2 text-gray-800 rounded-md"
                    >
                        {loading ? "Loading..." : "Retry"}
                    </Button>
                </div>
            ) : filteredPosts.length === 0 ? (
                <p className="text-gray-600">
                    No posts found.
                </p>
            ) : (
                <>
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {currentPosts.map((post: any) => (
                        <BlogCard key={post._id} post={post} />
                    ))}
                    <div className="mt-6 flex justify-center">
                        <PaginationComponent
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={(page) => setCurrentPage(page)}
                        />
                    </div>
                </>
            )}
        </div>
    );
}
