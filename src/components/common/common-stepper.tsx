'use client'

import React, { useState } from 'react'
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { hover } from '@/lib/hover';
import { Input } from '../ui/input';

interface Props {
  count: number
  onChange: (count: number) => void
}

export default function CommonStepper({ count, onChange }: Props) {
  const [itemCount, setItemCount] = useState(count || 0);

  const limit = { min: 1, max: 10 };

  return (
    <div className='flex gap-2 lg:gap-4 items-center'>
      <Button
        variant={'outline'}
        className={cn(hover.shadow, 'w-10 h-10')}
        size={'icon'}
        onClick={() => {
          if (itemCount <= limit.min) return;
          setItemCount(itemCount - 1);
          onChange(itemCount - 1);
        }}
      >
        -
      </Button>
      <Input
        type='text'
        className="text-center border-0 hover:border"
        style={{
          width: `${itemCount.toString().length + 3}ch`
        }}
        value={itemCount}
        onChange={(e) => {
          const updateValue = parseInt(e.target.value || limit.min.toString());

          if (updateValue <= limit.min || isNaN(updateValue)) {
            setItemCount(limit.min);
            onChange(limit.min);
            return;
          } else if (updateValue >= limit.max) {
            setItemCount(limit.max);
            onChange(limit.max);
            return;
          } else {
            setItemCount(updateValue);
            onChange(updateValue);
          }
        }}
      />
      <Button
        variant={'outline'}
        className={cn(hover.shadow, 'w-10 h-10')}
        size={'icon'}
        onClick={() => {
          if (itemCount >= limit.max) return;
          setItemCount(itemCount + 1);
          onChange(itemCount + 1);
        }}
      >
        +
      </Button>
    </div>
  )
}
