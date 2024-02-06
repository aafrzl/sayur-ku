import React from 'react'
import { Input } from '../ui/input'

export default function FilterPrice() {
  return (
    <div className='flex flex-col items-start'>
      <p className='text-leaf font-medium mb-2 gap-2'>Harga</p>
      <div className='flex gap-x-2'>
        <div className='relative'>
          <Input
            type='number'
            placeholder='Min'
            className='pl-10 border-leaf placeholder:text-carrot'
          />
          <p className='absolute top-2 left-3 text-carrot font-medium'>Rp</p>
        </div>
        <div className='relative'>
          <Input
            type='number'
            placeholder='Max'
            className='pl-10 border-leaf placeholder:text-carrot'
          />
          <p className='absolute top-2 left-3 text-carrot font-medium'>Rp</p>
        </div>
      </div>
    </div>
  )
}
