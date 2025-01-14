import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function FeaturedPosts() {
    const featuredPosts = [
        { id: 1, title: 'The Future of Web Development' },
        { id: 2, title: '10 Must-Know JavaScript Tips' },
        { id: 3, title: 'Building Scalable React Applications' },
    ]

    return (
        <Card>
            <CardHeader>
                <CardTitle>Featured Posts</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2">
                    {featuredPosts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/blog/${post.id}`} className="text-[#6930c3] hover:underline">
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}