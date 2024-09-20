import {
  Pagination as ShPagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number; // The current active page
  hasMore: boolean; // Indicates if there are more pages/items to load
  onPageChange: (page: number) => void; // Function to handle changing to a specific page
  onNextPage: () => void; // Function to handle moving to the next page
  onPreviousPage: () => void; // Function to handle moving to the previous page
}

export function Pagination({
  currentPage,
  hasMore,
  onNextPage,
  onPreviousPage,
}: PaginationProps) {
  return (
    <ShPagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" onClick={onPreviousPage} />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            isActive
            className="!bg-[#4062F9] text-white border-none"
          >
            {currentPage}
          </PaginationLink>
        </PaginationItem>

        {hasMore && (
          <>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" onClick={onNextPage} />
            </PaginationItem>
          </>
        )}
      </PaginationContent>
    </ShPagination>
  );
}
