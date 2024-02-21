import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'

import React from 'react'
import { ProductCategoryJSON } from '@/lib/data/productCategory'

export default function FilterCategoryProduct() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Sort by category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {ProductCategoryJSON.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.title}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
