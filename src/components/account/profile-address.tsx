'use client'

import { ShippingAddress } from '@prisma/client'
import DialogFormAddress from './dialog-form-address'

//TODO: Buat komponen untuk menampilkan daftar alamat pengiriman user
//TODO: Buat fungsi untuk mengubah value alamat pengiriman menjadi alamat utama

export default function ProfileAddress({ Alamat }: { Alamat: ShippingAddress[] }) {
  return (
    <div className='flex flex-col gap-8'>
      <h3 className='font-semibold text-center md:text-start'>
        Tambahkan Alamat pengiriman
      </h3>
      <DialogFormAddress />
      {Alamat.map((address) => (
        <div key={address.id} className='flex flex-col gap-2'>
          <p className='text-leaf font-semibold'>
            {address.namaPenerima}
          </p>
          <p className='text-muted-foreground'>
            {address.alamat}
          </p>
          <p className='text-muted-foreground'>
            {address.kota}, {address.provinsi}
          </p>
          <p className='text-muted-foreground'>
            {address.telepon}
          </p>
        </div>
      ))}
    </div>
  )
}
