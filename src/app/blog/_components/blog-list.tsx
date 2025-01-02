import BlogCard from "./blog-card";

const blogPosts = [
    {
        id: 1,
        title: "Getting Started with Next.js",
        excerpt: "Learn how to build modern web applications with Next.js",
        date: "2023-04-15",
        category: "Web Development",
        readTime: "5 min read",
    },
    {
        id: 2,
        title: "The Power of Server Components",
        excerpt:
            "Explore the benefits of using Server Components in your React applications",
        date: "2023-04-20",
        category: "React",
        readTime: "7 min read",
    },
    {
        id: 3,
        title: "Mastering Tailwind CSS",
        excerpt: "Tips and tricks for becoming proficient with Tailwind CSS",
        date: "2023-04-25",
        category: "CSS",
        readTime: "6 min read",
    },
    {
        id: 4,
        title: "Building Scalable APIs with Node.js",
        excerpt:
            "Learn best practices for creating robust and scalable APIs using Node.js",
        date: "2023-04-30",
        category: "Backend",
        readTime: "8 min read",
    },
];

export default function BlogList({ searchQuery }: { searchQuery: string }) {
    const filteredPosts = blogPosts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase())
    )

    return (
        <div className="space-y-8">
            <h2 className="text-3xl font-bold mb-6 text-[#6930c3]">
                {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Posts'}
            </h2>
            {filteredPosts.length === 0 ? (
                <p className="text-gray-600">No posts found matching your search criteria.</p>
            ) : (
                filteredPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))
            )}
        </div>
    );
}
