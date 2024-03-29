import React from 'react'
import { cn } from '@/lib/utils';
import { IconBeans, IconFruit, IconFungi, IconGinger, IconOnion, IconVegetable } from '@/components/icons/index';
import Link from 'next/link';
import { Button } from '../ui/button';
import { hover } from '@/lib/hover';

interface Props {
  id: string;
  icon: string;
  title: string;
}

const _renderIcon = (indentifier: string) => {
  const iconSize = "w-14 h-14 lg:w-20 lg:h-20"

  switch (indentifier) {
    case 'IconFungi':
      return <IconFungi className={cn(iconSize, 'fill-carrot')} />
    case "IconFruit":
      return <IconFruit className={cn(iconSize, 'fill-carrot')} />
    case "IconVegetable":
      return <IconVegetable className={cn(iconSize, 'fill-carrot')} />
    case "IconOnion":
      return <IconOnion className={cn(iconSize, 'fill-carrot')} />
    case "IconBeans":
      return <IconBeans className={cn(iconSize, 'fill-carrot')} />
    case "IconGinger":
      return <IconGinger className={cn(iconSize, 'fill-carrot')} />
    default:
      return <IconFungi className={cn(iconSize, 'fill-carrot')} />
  }
}

export default function ProductCategory({ id, icon, title }: Props) {
  return (
    <Link href={`/product?category=${id}`} legacyBehavior>
      <Button
        className={cn('h-auto border rounded-xl border-leaf', hover.shadow)}
        variant={'outline'}
      >
        <div className='flex flex-1 items-center rounded-xl py-6 px-4 gap-6'>
          {_renderIcon(icon)}
          <p className='flex flex-1 text-carrot text-lg lg:text-xl font-semibold'>
            {title}
          </p>
        </div>
      </Button>
    </Link>
  )
}
