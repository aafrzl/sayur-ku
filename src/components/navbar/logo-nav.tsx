import { hover } from '@/lib/hover'
import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LogoNav() {
  return (
    <Link href={'/'}>
      <Image
        src={'/images/logo-sayurku.png'}
        width={100}
        height={100}
        alt='Sayurku Logo'
        className={cn('object-contain object-center hover:scale-110', hover.shadow)}
      />
    </Link>
  )
}
