import { hover } from '@/lib/hover'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className='flex w-full py-4 min-h-screen'>
      <div className='container mx-auto flex flex-col gap-5 items-center'>
        <div className='border rounded-xl border-leaf max-h-24'>
          <div className='relative w-72 h-24'>
            <Image
              src={'/images/logo-sayurku.png'}
              alt='Logo Search'
              fill
              className={cn("object-cover hover:scale-105 transition-all duration-200 ease-in-out", hover.shadow)}
            />
          </div>
        </div>
        <div className='flex flex-col gap-2 mt-5'>
          <h3 className='font-bold text-leaf text-2xl'>
            Tentang Kami
          </h3>
          <p className='text-base/relaxed text-justify tracking-tight'>
            Sayurku adalah sebuah platform yang menyediakan berbagai macam sayuran segar dan sehat.
            Kami bekerja sama dengan para petani lokal untuk menyediakan sayuran berkualitas tinggi.
            Kami juga memberikan layanan pengiriman yang cepat dan aman.
          </p>
          <p className='text-base/relaxed text-justify tracking-tight'>
            Kami berkomitmen untuk memberikan layanan terbaik bagi pelanggan kami.
            Kami juga memberikan layanan pengiriman yang cepat dan aman.
          </p>
        </div>
      </div>
    </main>
  )
}
