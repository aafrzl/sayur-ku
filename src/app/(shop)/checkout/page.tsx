'use client'

import ItemList from '@/components/cart/item-list'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ProductDetail } from '@/types/product-detail'
import Link from 'next/link'
import React, { useState } from 'react'

import ProductJSON from '@/lib/data/json/product.json'
import { formatCurrency } from '@/lib/utils'
import DeliveryOptions from '@/components/cart/delivery-options'

export type DeliveryOptions = "HOME_DELIVERY" | "PICKUP";

export default function CheckoutPage() {
  const [deliveryMethods, setDeliveryMethods] = useState<DeliveryOptions>("HOME_DELIVERY");

  const [products] = useState<ProductDetail[]>([
    ProductJSON[0],
    ProductJSON[1],
    ProductJSON[2]
  ])

  const totalPrice = products.reduce((total, product) => total + product.price * (product.itemCount || 1), 0)
  const totalItem = products.reduce((total, product) => total + (product.itemCount || 1), 0)

  const applicationFee = 1000;
  const deliveryFee = deliveryMethods === "HOME_DELIVERY" ? 14000 : 0;
  const insuranceFee = deliveryMethods === "HOME_DELIVERY" ? 2000 : 0;

  const subTotal = totalPrice + deliveryFee + insuranceFee;

  return (
    <main className='flex flex-col w-full items-center py-10'>
      <div className='container flex flex-col lg:flex-row gap-8'>

        <div className='flex-[2] flex flex-col gap-6'>
          <ItemList />
          <Separator />
          <DeliveryOptions
            deliveryMethods={deliveryMethods}
            setDeliveryMethods={() => setDeliveryMethods(deliveryMethods === "HOME_DELIVERY" ? "PICKUP" : "HOME_DELIVERY")}
          />
        </div>

        <div className='flex-1 h-auto'>
          <div className='flex flex-col border border-leaf rounded-xl p-3 gap-2'>
            <p className='font-bold'>Ringkasan Belanja</p>
            <p className='font-bold'>Total Belanja</p>

            <div className='flex justify-between'>
              <p>Total Harga ({totalItem} barang)</p>
              <p>{formatCurrency(totalPrice)}</p>
            </div>

            {
              deliveryMethods === "HOME_DELIVERY" && (
                <>
                  <div className='flex justify-between'>
                    <p>Ongkos Kirim</p>
                    <p>{formatCurrency(deliveryFee)}</p>
                  </div>

                  <div className='flex justify-between'>
                    <p>Asuransi Pengiriman</p>
                    <p>{formatCurrency(insuranceFee)}</p>
                  </div>
                </>
              )
            }
            <Separator />
            <p className='font-bold'>Biaya Transaksi</p>
            <div className='flex justify-between'>
              <p>Biaya Jasa Aplikasi</p>
              <p>{formatCurrency(applicationFee)}</p>
            </div>

            <Separator />
            <div className='flex justify-between'>
              <p className='font-bold'>Total Tagihan</p>
              <p>{formatCurrency(subTotal)}</p>
            </div>
          </div>
          <div className='flex flex-1'>
            <Button asChild className='w-full mt-3'>
              <Link href={'/payment'}>
                Lanjutkan Pembayaran
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
