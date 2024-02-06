'use client'

import { ProductDetail } from '@/types/product-detail';
import React, { useState } from 'react'
import { Checkbox } from '../ui/checkbox';
import Image from 'next/image';
import { formatCurrency } from '@/lib/utils';
import { Button } from '../ui/button';
import { Trash } from 'lucide-react';
import CommonStepper from '../common/common-stepper';

interface Props {
  isChecked?: boolean;
  productDetails: ProductDetail;
  onChangeItemCount: (count: number) => void;
  onRemove: () => void;
}

export default function ProductCheckoutList({ isChecked, productDetails, onChangeItemCount, onRemove }: Props) {
  const [itemCount, setItemCount] = useState(productDetails.itemCount || 1)

  return (
    <div className='w-full mt-4'>
      <div className='flex gap-6 items-center'>
        <Checkbox
          className='border-2 border-leaf data-[state=checked]:bg-leaf data-[state=checked]:text-primary-foreground'
          checked={isChecked}
          id='product-checkout-list'
        />
        <div className='p-1 border rounded-lg'>
          <div className='w-14 h-14 lg:w-20 lg:h-20 relative'>
            <Image
              src={productDetails.img}
              alt={productDetails.name}
              fill
              className='object-contain'
            />
          </div>
        </div>
        <div className='flex flex-1 flex-col'>
          <p className='text-sm lg:text-base'>{productDetails.name}</p>
          <p className='font-semibold text-sm lg:text-lg'>{formatCurrency(productDetails.price)}</p>
        </div>
        {/* Count Stepper */}
        <CommonStepper
          count={itemCount}
          onChange={(count) => {
            setItemCount(count)
            onChangeItemCount(count)
          }}
        />
        <Button
          size={'icon'}
          variant={'destructive'}
          onClick={() => onRemove()}
          className='min-w-10 min-h-fit'
        >
          <Trash className='w-4 h-4' />
        </Button>
      </div>
    </div>
  )
}
