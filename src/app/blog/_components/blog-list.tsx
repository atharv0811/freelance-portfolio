import { useEffect, useState } from "react";
import BlogCard from "./blog-card";
import axios from "axios";

export default function BlogList({ searchQuery }: { searchQuery: string }) {
    const [blogPosts, setBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchBlogPosts = async () => {
        try {
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
            post.author.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.category.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-[#6930c3]">
                {searchQuery ? `Search Results for "${searchQuery}"` : "Latest Posts"}
            </h2>
            {loading ? (
                <p className="text-gray-600">Loading posts...</p>
            ) : error ? (
                <p className="text-red-600">{error}</p>
            ) : filteredPosts.length === 0 ? (
                <p className="text-gray-600">
                    No posts found matching your search criteria.
                </p>
            ) : (
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                filteredPosts.map((post: any) => (
                    <BlogCard key={post._id} post={post} author={post.author.name} />
                ))
            )}
        </div>
    );
}
