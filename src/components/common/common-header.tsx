'use client'

import { links } from '@/lib/data/links';
import { hover } from '@/lib/hover';
import { cn } from '@/lib/utils';
import { LogIn, Search, ShoppingCart } from 'lucide-react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import DesktopNav from '../navbar/desktop-nav';
import MobileNav from '../navbar/mobile-nav';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Skeleton } from '../ui/skeleton';
import CommonNotificationBadge from './common-notification-badge';
import UserAccountNav from '../auth/user-account-nav';

export default function CommonHeader() {
  const { status } = useSession();

  return (
    <header className='sticky top-0 z-50 w-full border-b bg-background py-3'>
      <nav className='container px-2 sm:px-4 lg:px-6 flex items-center justify-between'>
        {/* Left */}
        <DesktopNav links={links} />
        <MobileNav links={links} />
        {/* Right */}
        <div className='flex items-center gap-x-3'>
          <div className='relative'>
            <Search className='absolute top-1/2 transform -translate-y-1/2 left-2 w-4 h-4 stroke-leaf' />
            <Input
              placeholder='Cari sayuran'
              className='rounded-xl lg:w-50 w-30 text-sm text-leaf bg-background border border-leaf focus:outline-none focus:border-leaf hover:shadow-md transition-shadow duration-300 ease-in-out pl-8'
            />
          </div>
          <CommonNotificationBadge
            notificationDetail={{ count: 0, color: "bg-carrot" }}
          >
            <Button
              size='icon'
              className={cn('gap-x-1 rounded-full items-center flex text-leaf border-leaf', hover.shadow)}
              variant='outline'
              aria-label={`${0}-items-in-cart`}
              asChild
            >
              <Link href='/checkout'>
                <ShoppingCart className='w-4 h-4' />
              </Link>
            </Button>
          </CommonNotificationBadge>
          {status === "loading" && (
            <Skeleton className='w-28 h-10 rounded-xl' />
          )}
          {status === "authenticated" && (
            <UserAccountNav />
          )}
          {status === "unauthenticated" && (
            <Button
              asChild
              variant={'outline'}
              className={cn('rounded-full items-center flex text-leaf gap-x-1 px-3 lg:px-5', hover.shadow)}
            >
              <Link href='/sign-in'>
                <LogIn className='w-4 h-4 mr-1' /> Login
              </Link>
            </Button>
          )}
        </div>
      </nav>
    </header>
  )
}
