'use client'

import UserAvatar from '@/components/auth/user-avatar';
import CommonPagination from '@/components/common/common-pagination';
import ProductHistory from '@/components/history/product-history';
import TransactionFilter from '@/components/history/transaction-filter';
import ProductShowcase from '@/components/products/product-showcase';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProductJSON from '@/lib/data/json/product.json';
import { formatCurrency } from '@/lib/utils';
import { ProductDetail } from '@/types/product-detail';
import Link from 'next/link';
import { useState } from 'react';

export default function HistoryOrderspage() {
  const [transactions] = useState([
    {
      products: ProductJSON
    },
    {
      products: ProductJSON
    }
  ])

  const [recommendedProducts] = useState<ProductDetail[]>(ProductJSON);

  return (
    <main className='flex flex-col w-full min-h-screen items-center py-10'>
      <div className='container mx-auto flex flex-col lg:flex-row gap-4'>
        {/* Left side */}
        <div className='flex flex-col flex-[1] items-center border rounded-xl p-3 gap-3 h-fit'>
          <UserAvatar user={{
            name: 'Shadcn' || null,
            image: 'https://github.com/shadcn.png' || null,
          }}
            className='rounded-md w-20 h-20'
          />
          <p className='font-semibold'>Shadcn</p>
          <Separator className='w-[80%]' />
          <div className='mt-6 text-center'>
            <p className='font-semibold'>Transaksi Bulan Ini</p>
            <p className='font-bold'>120x</p>
          </div>
          <div className='text-center'>
            <p className='font-semibold'>Total Belanja bulan ini</p>
            <p className='font-bold text-leaf'>{formatCurrency(1200000)}</p>
          </div>
        </div>
        {/* Right side */}
        <div className='flex-[3]'>
          <div className='flex flex-col lg:flex-row gap-y-4 justify-between'>
            <h3 className='text-leaf text-xl lg:text-2xl font-bold'>Riwayat Belanja</h3>
            <TransactionFilter />
          </div>
          {transactions.map((transaction, index) => (
            <ProductHistory
              key={index}
              products={transaction.products}
            />
          ))}
          <div className='mt-4'>
            <CommonPagination
              page={1}
              total={10}
            />
          </div>
        </div>
      </div>

      <div className='container flex flex-col gap-4 mt-4'>
        <Separator />
        <div className='flex justify-between items-center'>
          <h3 className='font-bold text-leaf text-lg lg:text-xl'>Rekomendasi Buat Kamu</h3>
          <Button asChild variant='link'>
            <Link href='/products'>Lihat Semua</Link>
          </Button>
        </div>
        <ProductShowcase
          gridConfig='grid-cols-2 md:grid-cols-4'
          products={recommendedProducts.slice(0, 4)}
        />
      </div>
    </main>
  )
}
