import React from 'react'
import { Separator } from '../ui/separator'
import FilterCategory from './filter-category'
import FilterPrice from './filter-price'
import FilterRating from './filter-rating'

export default function FilterDesktop() {
  return (
    <div className='border border-leaf rounded-xl py-6 flex-[1] h-fit hidden lg:block px-4'>
      <div className='flex flex-col gap-y-1'>
        <h3 className='text-leaf text-xl font-semibold mb-2'>Filter Produk</h3>
        <p className='text-sm text-carrot'>Filter produk berdasarkan kategori, harga, dan rating.</p>
      </div>
      <Separator className="my-2" />
      {/* FilterCategory */}
      <FilterCategory />
      <Separator className="my-2" />
      {/* FilterHarga */}
      <FilterPrice />
      <Separator className="my-2" />
      {/* FilterRating */}
      <FilterRating />
    </div>
  )
}
