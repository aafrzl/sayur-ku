import { Select, SelectTrigger, SelectValue, SelectContent, SelectGroup, SelectItem } from '@/components/ui/select'

import React from 'react'

export default function FilterOrder() {
  return (
    <div>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Sort by status" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectItem value='pending'>Pending</SelectItem>
            <SelectItem value='paid'>Paid</SelectItem>
            <SelectItem value='canceled'>Canceled</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
