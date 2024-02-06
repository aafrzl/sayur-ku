import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Star } from 'lucide-react'

export default function FilterRating() {
  return (
    <div className='flex flex-col items-start'>
      <p className='text-leaf font-medium mb-2 gap-2'>Rating</p>
      <div className='flex flex-col gap-2'>
        <div className='flex gap-2 items-center'>
          <Checkbox
            id='rate-all'
            className='border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground'
          />
          <label
            htmlFor='rate-all'
            className='text-sm text-leaf cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
          >
            Semua Rating
          </label>
        </div>

        {[1, 2, 3, 4, 5].map((rate, index) => (
          <div
            key={index}
            className='flex gap-2 items-center'
          >
            <Checkbox
              id={`rate-${rate}`}
              className='border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground'
            />
            <label
              htmlFor={`rate-${rate}`}
              className='text-sm text-leaf cursor-pointer peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex gap-2'
            >
              {Array(rate).fill(null).map((_, index) => (
                <Star
                  key={index}
                  className='w-4 h-4 fill-leaf'
                />
              ))}
            </label>
          </div>
        ))}
      </div>
    </div>
  )
}
