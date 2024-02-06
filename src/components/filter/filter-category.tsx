import { ProductCategoryJSON } from '@/lib/data/productCategory'
import React from 'react'
import { Checkbox } from '../ui/checkbox'

export default function FilterCategory() {
  return (
    <div className='flex flex-col items-start'>
      <p className='text-leaf font-medium mb-2 gap-2'>Kategori</p>
      {ProductCategoryJSON.map((category) => (
        <div
          key={category.id}
          className='flex gap-2 items-center'
        >
          <Checkbox
            className='border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground'
            id={category.id}
          />
          <label
            htmlFor={category.id}
            className='text-sm text-leaf cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
            {category.title}
          </label>
        </div>
      ))}
    </div>
  )
}
