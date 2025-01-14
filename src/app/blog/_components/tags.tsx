import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function Tags() {
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