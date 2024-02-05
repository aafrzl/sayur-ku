import { Menu } from 'lucide-react';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import LogoNav from './logo-nav';

interface MobileNavProps {
  links: {
    title: string;
    href: string;
  }[]
}

export default function MobileNav({ links }: MobileNavProps) {
  return (
    <div className='flex lg:hidden'>
      <Sheet>
        <SheetTrigger asChild>
          <Button size={'icon'} variant={'ghost'}>
            <Menu size={24} className='stroke-leaf' />
          </Button>
        </SheetTrigger>
        <SheetContent side={'left'}>
          <SheetHeader>
            <LogoNav />
          </SheetHeader>
          <div className='flex flex-col items-start gap-3'>
            {
              links.map((link, index) => (
                <Button
                  asChild
                  variant={'link'}
                  key={index}
                  className='text-lg transition-all duration-200 ease-in-out hover:text-leaf hover:underline-offset-2'
                  >
                  <Link href={link.href}>
                    {link.title}
                  </Link>
                </Button>
              ))
            }

          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}
