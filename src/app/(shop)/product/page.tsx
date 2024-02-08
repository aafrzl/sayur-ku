'use client'

import FilterDesktop from '@/components/filter/filter-desktop';
import FilterMobile from '@/components/filter/filter-mobile';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { hover } from '@/lib/hover';
import { cn } from '@/lib/utils';
import NoDataPage from './no-data';

import ProductShowcase from '@/components/products/product-showcase';
import productJSON from '@/lib/data/json/product.json';
import CommonPagination from '@/components/common/common-pagination';

export default function ProductPage() {
  const isNoData = false;

  return (
    <main className='flex flex-col w-full min-h-screen py-8'>
      <div className='container flex flex-col lg:flex-row gap-6'>
        <FilterDesktop />
        <div className='lg:flex-[2] xl:flex-[3]'>
          {isNoData ? (
            <NoDataPage />
          ) : (
            <div className='flex flex-col items-start'>
              <div className='flex flex-col justify-center lg:flex-row lg:justify-between items-start gap-3 mb-5 w-full'>
                <h3 className='text-leaf text-2xl font-bold'>
                  Daftar Produk
                </h3>
                <div className='flex items-center gap-x-2'>
                  <FilterMobile />
                  <Select>
                    <SelectTrigger defaultValue={'harga-terendah'}
                      className={cn("border-leaf rounded-xl text-leaf", hover.shadow)}
                    >
                      <SelectValue placeholder='Urut berdasarkan' />
                    </SelectTrigger>
                    <SelectContent className='border-leaf'>
                      <SelectGroup className='text-leaf'>
                        <SelectItem value="harga-terendah">Harga Terendah</SelectItem>
                        <SelectItem value="harga-tertinggi">Harga Tertinggi</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <ProductShowcase
                gridConfig='grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
                products={productJSON}
              />
              {/* TODO: ADD Pagination */}
              <CommonPagination
                page={1}
                total={10}
              />
            </div>
          )}
        </div>
      </div>
    </main>
  )
}
