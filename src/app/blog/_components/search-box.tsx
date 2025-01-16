import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useDispatch } from 'react-redux'
import { onSearch } from '@/features/search/search-slice'

export default function SearchBox() {
    const dispatch = useDispatch()

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(onSearch(e.target.value))
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