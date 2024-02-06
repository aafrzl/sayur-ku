'use client'

import { cn } from '@/lib/utils';
import { CheckCheck, CopyCheck, Copy } from 'lucide-react';
import React, { useState } from 'react'
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { useToast } from '../ui/use-toast';

interface DeliveryOptionsProps {
  deliveryMethods: string;
  setDeliveryMethods: (value: string) => void;
}

export default function DeliveryOptions({ deliveryMethods, setDeliveryMethods }: DeliveryOptionsProps) {
  const [isCopied, setIsCopied] = useState(false);

  const { toast } = useToast();

  return (
    <div className='flex flex-col items-start gap-5'>
      <p className='text-lg font-semibold'>Pilihan Pengiriman</p>
      <div className='flex flex-col lg:flex-row gap-6 w-full'>
        <div
          className={cn(
            "flex flex-col p-4 border flex-1 relative cursor-pointer rounded-xl",
            deliveryMethods === "HOME_DELIVERY" ? "border-leaf bg-satin" : "border-border bg-white"
          )}
          onClick={() => setDeliveryMethods("HOME_DELIVERY")}
        >
          <p className='font-bold text-lg'>Home Delivery</p>
          <p className='text-sm text-gray-400'>
            Akan dikirimkan ke alamat yang anda masukkan
          </p>
          {deliveryMethods === "HOME_DELIVERY" && (
            <div className='absolute top-4 right-4'>
              <CheckCheck className='w-5 h-5 stroke-leaf' />
            </div>
          )}
        </div>
        <div
          className={cn(
            "flex flex-col p-4 border flex-1 relative cursor-pointer rounded-xl",
            deliveryMethods === "PICKUP" ? "border-leaf bg-satin" : "border-border bg-white"
          )}
          onClick={() => setDeliveryMethods("PICKUP")}
        >
          <p className='font-bold text-lg'>Ambil Di Toko</p>
          <p className='text-sm text-gray-400'>
            Ambil barang di toko kami
          </p>
          {deliveryMethods === "PICKUP" && (
            <div className='absolute top-4 right-4'>
              <CheckCheck className='w-5 h-5 stroke-leaf' />
            </div>
          )}
        </div>
      </div>

      {deliveryMethods === "HOME_DELIVERY" && (
        <div className='flex flex-col gap-4 p-4 border rounded-xl w-full border-leaf'>
          <p className='text-lg font-semibold'>Alamat Penerima</p>
          <Input
            placeholder='Masukkan nama penerima'
          />
          <Input
            placeholder='Masukkan nomor telepon'
          />
          <Textarea
            placeholder='Masukkan alamat lengkap'
          />
        </div>
      )}
      {deliveryMethods === "PICKUP" && (
        <div className='flex flex-col gap-4 border p-4 rounded-xl w-full border-leaf relative'>
          <p className='font-bold'>Alamat Toko</p>
          <p className='text-sm'>Jl. Raya Bogor No. 123, Bogor, Jawa Barat, Indonesia</p>
          <p className='text-sm font-medium text-gray-400'>
            Buka pukul 08:00 - 17:00 WIB
          </p>
          <Button
            className='absolute right-4 top-4'
            size={'icon'}
            variant={'outline'}
            onClick={() => {
              navigator.clipboard.writeText('Jl. Raya Bogor No. 123, Bogor, Jawa Barat, Indonesia')
              toast({
                title: 'Alamat toko disalin',
                description: 'Alamat toko berhasil disalin ke clipboard',
              })
              setIsCopied(true)
              setTimeout(() => {
                setIsCopied(false)
              }, 3000)
            }}
          >
            {isCopied ? (
              <CopyCheck className='w-5 h-5 stroke-leaf' />
            ) : (
              <Copy className='w-5 h-5 stroke-leaf' />
            )}
          </Button>
        </div>
      )}
    </div>
  )
}
