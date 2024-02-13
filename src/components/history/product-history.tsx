import { ProductDetail } from '@/types/product-detail'
import { ShoppingBag } from 'lucide-react';
import React from 'react'
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { cn, formatCurrency } from '@/lib/utils';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Link from 'next/link';
import { hover } from '@/lib/hover';

interface Props {
  products: ProductDetail[];
}

export default function ProductHistory({ products }: Props) {
  const product = products[0];

  return (
    <div className='w-full'>
      <div className='mt-6'>
        <div className='p-4 shadow-sm border hover:shadow-md hover:shadow-leaf transition-all duration-300 ease-in-out rounded-xl'>
          <div className='flex justify-between'>
            <h3 className='flex items-center gap-x-2'>
              <ShoppingBag className='w-5 h-5 stroke-leaf' />
              <span className='text-leaf font-semibold'>#123123123</span>
            </h3>
            <div className='flex gap-2 items-center'>
              <p className='text-sm'>8 Feb 2024</p>
              <Badge className='w-fit'>Dikirim</Badge>
            </div>
          </div>
          <Separator className='my-4' />
          <div className='flex gap-6'>
            <div className='border p-4 rounded-md'>
              <div className='relative w-14 h-14'>
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className='object-contain'
                />
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-sm font-medium'>{product.name}</p>
              <p className='text-sm font-semibold'>
                {product.itemCount} {product.unit} x {formatCurrency(product.price)}
              </p>
              <p className='text-sm'>
                dan {products.length - 1} barang lainnya
              </p>
            </div>
          </div>
          <div className='flex flex-col md:flex-row justify-between items-start'>
            <div className='flex flex-col gap-2 mt-2'>
              <p className='text-sm font-medium'>Total Belanja</p>
              <p className='text-sm font-semibold'>{formatCurrency(product.price * 2)}</p>
            </div>
            <div className='flex gap-x-2'>
              <Button asChild variant={'link'}>
                <Link href={'/checkout'}>
                  Lihat Detail Transaksi
                </Link>
              </Button>
              <Button asChild className={cn('text-white', hover.shadow)}>
                <Link href={'/products'}>
                  Beli Lagi
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
