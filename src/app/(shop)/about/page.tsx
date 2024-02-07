import { hover } from '@/lib/hover'
import { cn } from '@/lib/utils'
import { Mail } from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <main className='flex flex-col md:flex-row gap-4 w-full min-h-screen py-10 transition-all duration-300 ease-in-out'>
      <div className='container flex justify-center'>
        <div className='relative w-72 h-36 flex items-center border border-leaf rounded-xl'>
          <Image
            src={'/images/logo-sayurku.png'}
            alt='Logo Search'
            fill
            className={cn("object-contain hover:scale-105 transition-all duration-200 ease-in-out", hover.shadow)}
          />
        </div>
      </div>
      <div className='container flex flex-col gap-5 items-start'>
        <div className='flex flex-col gap-2 max-w-xl'>
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
        <div className='flex flex-col gap-2 max-w-xl'>
          <h3 className='font-bold text-leaf text-2xl'>
            Service Kami
          </h3>
          <p className='text-base/relaxed text-justify tracking-tight'>
            Kami memberikan layanan pengiriman yang cepat dan aman.
            Kami juga memberikan layanan pengiriman yang cepat dan aman.
          </p>
          <p className='text-base/relaxed text-justify tracking-tight'>
            Kami berkomitmen untuk memberikan layanan terbaik bagi pelanggan kami.
            Kami juga memberikan layanan pengiriman yang cepat dan aman.
          </p>
        </div>
        <div className='flex flex-col gap-2 max-w-xl'>
          <h3 className='font-bold text-leaf text-2xl'>
            Kontak Kami
          </h3>
          <p className='text-base/relaxed text-justify tracking-tight'>
            Jl. Raya Bogor No. 123, Bogor, Jawa Barat, Indonesia
          </p>
          <p className='text-base/relaxed text-justify tracking-tight inline-flex items-center gap-x-2'>
            <Mail className='stroke-leaf' /> <a href='mailto:hi@sayurku.com' className='text-leaf'>hi@sayurku.com</a>
          </p>
        </div>
      </div>
    </main>
  )
}
