import { Heart, LogIn, Search, ShoppingCart } from 'lucide-react';
import MobileNav from '../navbar/mobile-nav';
import { Button } from '../ui/button';
import Link from 'next/link';
import CommonNotificationBadge from './common-notification-badge';
import { cn } from '@/lib/utils';
import { hover } from '@/lib/hover';
import UserAccountNav from '../auth/user-account-nav';
import DesktopNav from '../navbar/desktop-nav';
import { Input } from '../ui/input';
import { links } from '@/lib/data/links';

export default function CommonHeader() {
  const isSignedIn = true;

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
          <Button
            size='icon'
            className={cn('gap-x-1 rounded-full items-center flex text-leaf border-leaf', hover.shadow)}
            variant='outline'
            aria-label={`${0}-items-in-cart`}
            asChild
          >
            <Link href='/wishlist'>
              <Heart className='w-4 h-4' />
            </Link>
          </Button>
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
          {isSignedIn ? (
            <UserAccountNav />
          ) : (
            <Button
              asChild
              variant={'outline'}
              className={cn('rounded-full items-center flex text-leaf gap-x-1', hover.shadow)}
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
