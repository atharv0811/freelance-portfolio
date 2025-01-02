import { Oswald } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const oswald = Oswald({ subsets: ['latin'] });

const blogPosts = [
    {
        "id": "1",
        "title": "My First Blog Post",
        "date": "2023-05-01",
        "excerpt": "This is a short excerpt from my first blog post.",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "imageUrl": "/dummy.jpg"
    },
    {
        "id": "2",
        "title": "Learning Next.js",
        "date": "2023-05-15",
        "excerpt": "My journey in learning Next.js and building this portfolio.",
        "content": "Next.js is a powerful React framework that makes it easy to build server-side rendered and statically generated web applications. In this post, I'll share my experience learning Next.js and how I used it to build this portfolio website.",
        "imageUrl": "/dummy.jpg"
    },
    {
        "id": "3",
        "title": "The Art of Web Design",
        "date": "2023-06-01",
        "excerpt": "Exploring the principles of effective web design and user experience.",
        "content": "Web design is a crucial aspect of creating successful online experiences. In this post, we'll dive into the key principles of effective web design and how they contribute to a positive user experience.",
        "imageUrl": "/dummy.jpg"
    },
]

const Blog = () => {
    return (
        <section id="blog" className="pb-[80px]">
            <div className="max-w-[1200px] mx-auto">
                <div className="flex-[0,0,100%] max-w-[100%]">
                    <div className="mb-[55px] text-center">
                        <h2 className={`${oswald.className} font-[700] capitalize leading-[1.2] mb-0 text-[#221b68] text-[48px]`}>Blogs</h2>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
                    {blogPosts.map((post) => (
                        <Link key={post.id} href={`/blog/${post.id}`} className="block h-[350px]">
                            <div className="h-full border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                                <div className="h-48 relative">
                                    <Image
                                        src={post.imageUrl}
                                        alt={post.title}
                                        width={300}
                                        height={200}
                                        className="w-full h-48 object-cover"
                                    />
                                </div>
                                <div className="p-4 flex-grow flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2 hover:text-[#6930c3]">
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm mb-2">{post.date}</p>
                                    <p className="text-gray-700 line-clamp-2">{post.excerpt}</p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Blog