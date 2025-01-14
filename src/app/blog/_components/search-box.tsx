import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SearchBox({ onSearch }: { onSearch: (query: string) => void }) {
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