import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'
import FilterOrder from './filter-orders'
import TableOrders from './table-orders'

export default function DashboardOrdersPage() {
  return (
    <div className='container mx-auto py-14 flex flex-col gap-5'>
      <div className='flex flex-col gap-2'>
        <h3 className='text-2xl font-bold text-leaf'>List of Orders</h3>
        <p className="text-sm text-gray-500">
          A table of orders will be displayed here.
        </p>
      </div>
      <div className='flex items-center justify-between'>
        <div className="relative">
          <Search className="absolute top-6 left-3 w-6 h-6 text-gray-400" />
          <Input type="text" placeholder="Search order" className="mt-4 pl-10" />
        </div>
        <FilterOrder />
      </div>
      <TableOrders />
    </div>
  )
}
