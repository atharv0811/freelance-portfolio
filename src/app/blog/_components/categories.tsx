import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Categories() {
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