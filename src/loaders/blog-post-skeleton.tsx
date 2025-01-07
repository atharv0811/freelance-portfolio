import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

const BlogCardSkeleton = () => {
    return (
        [1, 2, 3].map((k) => {
            return (
                <Card className="overflow-hidden" key={k}>
                    <CardHeader className="pb-4">
                        <div className="flex justify-between items-start mb-2">
                            <Skeleton className="h-6 w-20" />
                            <Skeleton className="h-5 w-16" />
                        </div>
                        <Skeleton className="h-8 w-3/4 mb-2" />
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-5 w-1/3" />
                            <Skeleton className="h-5 w-1/3" />
                        </div>
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-5 w-full mb-1" />
                        <Skeleton className="h-5 w-4/5" />
                    </CardContent>
                    <CardFooter>
                        <Skeleton className="h-10 w-24" />
                    </CardFooter>
                </Card>
            )
        })
    );
}

export default BlogCardSkeleton;
