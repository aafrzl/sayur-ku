import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import TableProduct from './table-product'
import FilterCategoryProduct from './filter-category'

export default function ProductDashboardPage() {

  return (
    <div className='container mx-auto py-14 flex flex-col'>
      <h3 className='text-2xl font-bold mb-4 text-leaf'>List of Product</h3>
      <p className="text-sm text-gray-500">
        Product list will be displayed here.
      </p>
      <div className='flex items-center justify-between'>
        <div className="relative max-w-md">
          <Search className="absolute top-6 left-3 w-6 h-6 text-gray-400" />
          <Input type="text" placeholder="Search product" className="mt-4 pl-10" />
        </div>
        <FilterCategoryProduct />
      </div>
      <TableProduct />
    </div>
  )
}
