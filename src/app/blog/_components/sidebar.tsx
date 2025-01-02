'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import Link from 'next/link'

interface SidebarProps {
    onSearch: (query: string) => void
}

export default function Sidebar({ onSearch }: SidebarProps) {
    return (
        <div className="space-y-8">
            <SearchBox onSearch={onSearch} />
            <FeaturedPosts />
            <Categories />
            <Tags />
        </div>
    )
}

function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value)
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle>Search</CardTitle>
            </CardHeader>
            <CardContent>
                <Input
                    placeholder="Search posts..."
                    className="w-full"
                    onChange={handleInputChange}
                />
            </CardContent>
        </Card>
    )
}

function FeaturedPosts() {
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

function Categories() {
    const categories = ['Web Development', 'JavaScript', 'React', 'Next.js', 'CSS']

    return (
        <Card>
            <CardHeader>
                <CardTitle>Categories</CardTitle>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 divide-y-2">
                    {categories.map((category) => (
                        <li key={category} className='pt-3'>
                            <Link href={`/category/${category.toLowerCase()}`} className="text-gray-600 hover:text-gray-800">
                                {category}
                            </Link>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

function Tags() {
    const tags = ['JavaScript', 'React', 'Next.js', 'CSS', 'Tailwind', 'TypeScript', 'Node.js']

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="hover:bg-gray-200 cursor-pointer">
                            <Link href={`/tag/${tag.toLowerCase()}`} className="hover:underline">
                                {tag}
                            </Link>
                        </Badge>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}

