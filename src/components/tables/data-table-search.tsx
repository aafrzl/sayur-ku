import { Table } from '@tanstack/react-table'
import React from 'react'
import { Input } from '../ui/input';

interface Props<TData> {
  table: Table<TData>;
  textPlaceholder?: string;
}

export default function DataTableSearch<TData>({
  table,
  textPlaceholder,
}: Props<TData>) {
  return (
    <Input
      placeholder={textPlaceholder || "Search..."}
      value={(table.getColumn("name")?.getFilterValue() as string) || ""}
      onChange={(e) => {
        table.getColumn("name")?.setFilterValue(e.target.value)
      }}
      className='w-1/2'
    />
  )
}
