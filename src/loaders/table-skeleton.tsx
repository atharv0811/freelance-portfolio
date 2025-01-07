import { Skeleton } from '@/components/ui/skeleton';

const TableSkeleton = () => {
    return (
        <tbody className="bg-white divide-y divide-gray-200">
            {Array.from({ length: 6 }).map((_, index) => (
                <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-4 w-32" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-4 w-24" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-6 w-20 rounded-full" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-4 w-20" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                        <Skeleton className="h-4 w-12" />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                        <Skeleton className="h-4 w-8" />
                    </td>
                </tr>
            ))}
        </tbody>
    );
};

export default TableSkeleton;
