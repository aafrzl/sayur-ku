import { Calendar, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import Link from 'next/link'
import LogoNav from '../navbar/logo-nav'

export default function CommonFooter() {
  return (
    <footer className='w-full flex items-center justify-center bg-footer-pattern py-4'>
      <div className='container m-auto'>
        <div className='flex flex-col lg:flex-row gap-6 items-start lg:items-center'>
          <div className='flex flex-col gap-5 grow-[2]'>
            <LogoNav />

            <div className='flex gap-x-2 items-center'>
              <Link href={'/'}>
                <Facebook className='w-5 h-5' />
              </Link>
              <Link href={'/'}>
                <Instagram className='w-5 h-5' />
              </Link>
              <Link href={'/'}>
                <Mail className='w-5 h-5' />
              </Link>
            </div>
            <div className='flex flex-col gap-4'>
              <Link href={'/'} className='inline-flex gap-x-2 items-center text-sm md:text-base'>
                <Phone className='w-5 h-5' /> <span>(62) 123-1345-1234</span>
              </Link>
              <Link href={'/'} className='inline-flex gap-x-2 items-center text-sm md:text-base'>
                <Mail className='w-5 h-5' /> <span>hi@sayurku.com</span>
              </Link>
              <Link href={'/'} className='inline-flex gap-x-2 items-center text-sm md:text-base'>
                <MapPin className='w-5 h-5' />
                <span>
                  Jl. Raya Bogor No. 123, Bogor, Jawa Barat, Indonesia
                </span>
              </Link>
              <Link href={'/'} className='inline-flex gap-x-2 items-center text-sm md:text-base'>
                <Calendar className='w-5 h-5' />
                <span>
                  Senin - Jumat: 08.00 - 17.00 WIB
                </span>
              </Link>
            </div>
          </div>
          <div className='flex flex-col gap-5 grow'>
            <h3 className='text-lg font-semibold'>Tautan</h3>
            <Link href={'/'} className='text-sm md:text-base'>
              Beranda
            </Link>
            <Link href={'/'} className='text-sm md:text-base'>
              Produk
            </Link>
            <Link href={'/'} className='text-sm md:text-base'>
              Tentang Kami
            </Link>
          </div>
          <div className='flex flex-col gap-5 grow'>
            <h3 className='text-lg font-semibold'>Perusahaan</h3>
            <Link href={'/'} className='text-sm md:text-base'>
              Tentang Kami
            </Link>
            <Link href={'/'} className='text-sm md:text-base'>
              Kontak
            </Link>
            <Link href={'/'} className='text-sm md:text-base'>
              Karir
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
