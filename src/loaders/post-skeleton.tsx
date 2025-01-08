import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

const PostSkeleton = () => {
    return (
        <Card className="md:col-span-2 p-5">
            <Skeleton className="h-12 w-3/4 mb-6" />
            <Skeleton className="h-6 w-1/2 mb-4" />
            <Skeleton className="h-64 w-full mb-6" />

            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-5/6 mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-4/5 mb-8" />

            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-3/4 mb-8" />

            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-full mb-4" />
            <Skeleton className="h-4 w-5/6 mb-4" />
        </Card>
    )
}

export default PostSkeleton