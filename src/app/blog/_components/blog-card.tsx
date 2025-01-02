import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import { FC } from 'react'

interface BlogPost {
    id: number
    title: string
    excerpt: string
    date: string
    category: string
    readTime: string
}

const BlogCard: FC<{ post: BlogPost }> = ({ post }) => {
    return (
        <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="mb-2">
                        {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {post.readTime}
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold">
                    <Link href={`/blog/${post.id}`} className="hover:underline">
                        {post.title}
                    </Link>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500">
                    <CalendarIcon className="w-4 h-4 mr-1" />
                    <time dateTime={post.date}>Published on {post.date}</time>
                </div>
            </CardContent>
        </Card>
    )
}

export default BlogCard;