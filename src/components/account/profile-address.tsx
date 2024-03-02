'use client'

import { Alamat } from '@prisma/client'
import DialogFormAddress from './dialog-form-address'

//TODO: Buat form untuk input alamat pengiriman

export default function ProfileAddress({ Alamat }: { Alamat: Alamat[] }) {
  return (
    <div className='flex flex-col gap-8'>
      <h3 className='font-semibold text-center md:text-start'>
        Masukkan Alamat Pengiriman
      </h3>
      <DialogFormAddress />
    </div>
  )
}
