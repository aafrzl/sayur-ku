'use client'

import { ShippingAddress } from '@prisma/client'
import DialogDeleteAddress from './dialog-delete-address'
import DialogFormAddress from './dialog-form-address'
import DialogUpdateAddress from './dialog-update-address'

export default function ProfileAddress({ ShippingAddress }: { ShippingAddress: ShippingAddress[] }) {

  return (
    <div className='flex flex-col gap-8'>
      <h3 className='font-semibold text-center md:text-start'>
        Daftar Alamat Pengiriman
      </h3>
      <DialogFormAddress />
      {ShippingAddress.map((address) => (
        <div
          key={address.id}
          className='flex flex-col border px-4 py-2 rounded-md gap-4'>
          <div className='flex flex-col items-start'>
            <p className='font-semibold'>
              {address.namaPenerima}
            </p>
            <p>
              {address.alamat}
            </p>
            <p className='text-sm'>
              {address.provinsi}, {address.kota}, {address.kelurahan}, {address.kecamatan}
            </p>
          </div>
          <div className='flex gap-x-2'>
            <DialogUpdateAddress
              address={address}
            />
            <DialogDeleteAddress
              id={address.id}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
