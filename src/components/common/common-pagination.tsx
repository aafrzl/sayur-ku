'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { useSearchParams } from "next/navigation";

import React from 'react'

interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}

export default function CommonPagination({ itemCount, pageSize, currentPage }: Props) {
  const searchParams = useSearchParams();

  const totalPages = Math.ceil(itemCount / pageSize);
  if (totalPages === 1) return null;

  const changePage = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString())
    return `?${params.toString()}`
  }

  return (
    <Pagination className="mt-10">
      {currentPage > 1 && (
        <PaginationPrevious
          href={changePage(currentPage - 1)}
          isActive={currentPage === 1}
        />
      )}
      {totalPages > 7 && currentPage > 4 && (
        <PaginationEllipsis />
      )}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <PaginationLink
          key={page}
          href={changePage(page)}
          isActive={currentPage === page}
        >
          {page}
        </PaginationLink>
      ))}

      {totalPages > 7 && currentPage < totalPages - 3 && (
        <PaginationEllipsis />
      )}
      {currentPage < totalPages && (
        <PaginationNext
          href={changePage(currentPage + 1)}
          isActive={currentPage === totalPages}
        />
      )}
    </Pagination>
  )
}
