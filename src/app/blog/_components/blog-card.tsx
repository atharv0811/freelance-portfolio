import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CalendarIcon, ClockIcon } from 'lucide-react'
import { FC } from 'react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

interface BlogPost {
    id: number
    title: string
    description: string
    publishDate: string
    category: string
    readTime: string
}

const BlogCard: FC<{ post: BlogPost; author: string }> = ({ post, author }) => {
    return (
        <Card className="overflow-hidden transition-shadow duration-300 hover:shadow-lg">
            <CardHeader className="pb-4">
                <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="mb-2">
                        {post.category}
                    </Badge>
                    <div className="flex items-center text-sm text-gray-500">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {post.readTime} min read
                    </div>
                </div>
                <CardTitle className="text-2xl font-bold">
                    {post.title}
                </CardTitle>
                <CardDescription className='flex items-center gap-4'>
                    <p className="text-gray-600">{author}</p>
                    <div className="flex items-center text-sm text-gray-500">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        <time dateTime={post.publishDate}>Published on {post.publishDate}</time>
                    </div>
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className='line-clamp-2'>{post.description}</p>
            </CardContent>
            <CardFooter>
                <Link href={`/blog/${post.id}`} className="group">
                    <Button className='group-hover:underline group-hover:bg-[#401585] bg-[#6930c3]'>Read more</Button>
                </Link>
            </CardFooter>
        </Card>
    )
}

export default BlogCard;