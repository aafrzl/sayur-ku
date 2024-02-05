'use client'

import { hover } from '@/lib/hover';
import { cn, formatCurrency } from '@/lib/utils';
import { ProductDetail } from '@/types/product-detail'
import { Heart, ShoppingBag, Star } from 'lucide-react';
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from '../ui/button';

interface Props {
  product: ProductDetail;
}

export default function ProductCard({ product }: Props) {
  const [isFavorite, setisFavorite] = useState(false)

  return (
    <div className='shadow-sm border border-leaf hover:shadow-md hover:shadow-leaf-hover duration-300 transition-all rounded-xl space-y-4 h-full relative max-w-[500px]'>
      <div className='absolute right-2 top-3 z-10'
        onClick={(e) => {
          e.preventDefault()
          e.stopPropagation()
          setisFavorite(!isFavorite)
        }}
      >
        <Heart
          className={
            cn('w-6 h-6 stroke-leaf',
              isFavorite ? 'fill-leaf' : 'stroke-leaf',
              hover.shadow,
            )}
        />
      </div>
      <div className='aspect-square m-3 rounded-2xl relative'>
        <Image
          src={product.img}
          alt={product.name}
          fill
          sizes='(min-width: 640px) 200px, 100px'
          className='aspect-square object-contain object-center rounded-2xl'
        />
      </div>
      <div className='px-4 space-y-3 pb-6'>
        <div className='space-y-2'>
          {/* ProductName */}
          <p className='text-sm lg:text-base text-leaf font-semibold'>
            {product.name}
          </p>
          {/* Price */}
          <p className='font-bold'>
            {formatCurrency(product.price)} / {product.unit}
          </p>
          {/* Rating */}
          <div className='inline-flex gap-x-2 items-center'>
            <Star className='fill-leaf stroke-leaf w-4 h-4' />
            <div className='text-sm'>{product.rating} | {product.sold} terjual</div>
          </div>
          {/* Button Add To Cart */}
          <Button
            className='w-full'
            size={'sm'}
          >
            <ShoppingBag className='w-4 h-4 sm:w-5 sm:h-5' />
            <span className='ml-1 text-xs md:text-sm'>Tambah Keranjang</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
