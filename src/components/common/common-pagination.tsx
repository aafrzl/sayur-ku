import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

import React from 'react'

interface Props {
  page: number;
  total?: number;
}

export default function CommonPagination({ page, total }: Props): JSX.Element {
  const totalPage = total || 1

  const generatePageLink = (page: number) => {
    return `?page=${page}`
  }

  return (
    <Pagination className="mt-10">
      <PaginationContent>
        <PaginationPrevious
          href={generatePageLink(page - 1)}
        >
          Sebelumnya
        </PaginationPrevious>
        {page > 1 && (
          <PaginationItem>
            <PaginationLink href={generatePageLink(1)}>1</PaginationLink>
          </PaginationItem>
        )}
        {page > 2 && (
          <PaginationEllipsis />
        )}
        {page > 2 && (
          <PaginationItem>
            <PaginationLink href={generatePageLink(page - 1)}>{page - 1}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href={generatePageLink(page)}>{page}</PaginationLink>
        </PaginationItem>
        {page < totalPage - 1 && (
          <PaginationItem>
            <PaginationLink href={generatePageLink(page + 1)}>{page + 1}</PaginationLink>
          </PaginationItem>
        )}
        {page < totalPage - 2 && (
          <PaginationEllipsis />
        )}
        {page < totalPage && (
          <PaginationItem>
            <PaginationLink href={generatePageLink(totalPage)}>{totalPage}</PaginationLink>
          </PaginationItem>
        )}
        <PaginationNext
          href={generatePageLink(page + 1)}
        >
          Selanjutnya
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  )
}
