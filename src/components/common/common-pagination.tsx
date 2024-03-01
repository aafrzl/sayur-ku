'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious
} from "@/components/ui/pagination";
import { useSearchParams } from "next/navigation";

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

export default function CommonPagination({ itemCount, pageSize, currentPage }: Props) {
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(itemCount / pageSize);
  if (totalPages <= 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString())
    return `?${params.toString()}`
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        {currentPage > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={changePage(currentPage - 1)}
              isActive={currentPage === 1}
            />
          </PaginationItem>
        )}
        {totalPages > 7 && currentPage > 4 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <PaginationItem key={page}>
            <PaginationLink
              href={changePage(page)}
              isActive={currentPage === page}
            >
              {page}
            </PaginationLink>
          </PaginationItem>
        ))}

        {totalPages > 7 && currentPage < totalPages - 3 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}

        {currentPage < totalPages && (
          <PaginationItem>
            <PaginationNext
              href={changePage(currentPage + 1)}
              isActive={currentPage === totalPages}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  )
}
