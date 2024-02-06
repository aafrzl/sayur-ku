import Image from 'next/image'
import React from 'react'

export default function NoDataPage() {
  return (
    <div className='flex flex-col items-center justify-center'>
      <div className='relative w-80 h-80'>
        <Image
          src={'/images/no-data-image.jpg'}
          alt='No Data'
          fill
          className='object-contain'
        />
      </div>
      <h3 className='text-leaf font-bold text-2xl text-center'>
        Tidak ada produk yang ditemukan
      </h3>
    </div>
  )
}
