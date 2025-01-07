import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationPrevious,
    PaginationNext,
} from "@/components/ui/pagination";

interface PaginationComponentProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const PaginationComponent: React.FC<PaginationComponentProps> = ({
    currentPage,
    totalPages,
    onPageChange,
}) => {
    return (
        <Pagination>
            <PaginationContent>
                <PaginationPrevious
                    className="cursor-pointer"
                    onClick={() => onPageChange(Math.max(currentPage - 1, 1))}
                    isActive={!(currentPage === 1)}
                />
                {[...Array(totalPages)].map((_, index) => {
                    const page = index + 1;
                    return (
                        <PaginationItem key={page} className="cursor-pointer">
                            <PaginationLink
                                isActive={currentPage === page}
                                onClick={() => onPageChange(page)}
                            >
                                {page}
                            </PaginationLink>
                        </PaginationItem>
                    );
                })}
                <PaginationNext
                    className="cursor-pointer"
                    onClick={() => onPageChange(Math.min(currentPage + 1, totalPages))}
                    isActive={!(currentPage === totalPages)}
                />
            </PaginationContent>
        </Pagination>
    );
};

export default PaginationComponent;
