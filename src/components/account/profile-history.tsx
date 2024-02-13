'use client'

import CommonPagination from "@/components/common/common-pagination";
import ProductHistory from "@/components/history/product-history";
import ProductJSON from '@/lib/data/json/product.json';
import Image from "next/image";
import { useState } from "react";

export default function ProfileHistory() {

  //Ambil history transaction yang berhasil
  const [transactions] = useState([
    {
      products: ProductJSON
    },
    {
      products: ProductJSON
    }
  ])

  return (
    <div className="lg:flex-1 border rounded-xl p-3 flex-col flex">
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold">
          History Belanja
        </h3>
        <p className="text-sm">
          Riwayat belanja yang sudah Anda lakukan
        </p>
      </div>
      <div className="flex flex-col items-center gap-5">
        {transactions.length === 0 ? (
          <div className="flex flex-col gap-3 items-center">
            <Image
              src="/images/no-data-image.jpg"
              alt="No data"
              width={500}
              height={500}
              loading="eager"
            />
            <h3 className="text-leaf font-bold text-2xl">
              Belum ada transaksi
            </h3>
          </div>
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  )
}
