import { AspectRatio } from '@/components/ui/aspect-ratio'
import Image from 'next/image'
import { PropsWithChildren } from 'react'

export default function AuthLayout({ children }: PropsWithChildren) {
  return (
    <div className='grid min-h-screen grid-cols-1 md:grid-cols-3 lg:grid-cols-2'>
      <AspectRatio ratio={16 / 9}>
        <Image
          src='/images/bg-auth-left.webp'
          alt='Sayurku Background'
          className='absolute inset-0 object-cover'
          priority
          fill
          sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
        />
        <div className='absolute inset-0 bg-gradient-to-t from-satin to-satin/20 md:to-satin/40' />
        <div className='absolute bottom-5 left-5 translate-x-1/2 z-20 line-clamp-1 text-sm sm:translate-x-0 sm:bottom-6 sm:left-8 transition-all duration-200 ease-in'>
          Photo by{' '}
          <a href="https://www.pexels.com/@nc-farm-bureau-mark/" className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>Mark Stebnicki</a>
          {' on '}
          <a href="https://www.pexels.com/photo/pile-of-assorted-varieties-of-vegetables-2255935/" className='hover:underline hover:text-leaf transition-colors duration-200 ease-in-out'>Pexels</a>
        </div>
      </AspectRatio>
      <main className='container absolute top-1/2 col-span-1 flex -translate-y-1/2 items-center md:static md:top-0 md:col-span-2 md:flex md:translate-y-0 lg:col-span-1'>
        {children}
      </main>
    </div>
  )
}
